// import { ConfigService } from '@nestjs/config';
// import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

// export const databaseConfig = async (
//   configService: ConfigService,
// ): Promise<TypeOrmModuleOptions> => ({
//   type: 'mysql',
//   host: configService.get<string>('DB_HOST'),
//   port: configService.get<number>('DB_PORT'),
//   username: configService.get<string>('DB_USER'),
//   password: configService.get<string>('DB_PASS'),
//   database: configService.get<string>('DB_NAME'),
//   synchronize: true, // Chỉ sử dụng trong môi trường phát triển
//   autoLoadEntities: true,
//   entities: [join(__dirname, 'src/entities/**/*.entities{.ts,.js}')], // Đường dẫn đến thư mục entities
// });

import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig = async (
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> => {
  const dbHost = configService.get<string>('DB_HOST');
  const dbPort = configService.get<number>('DB_PORT');
  const dbUsername = configService.get<string>('DB_USER');
  const dbPassword = configService.get<string>('DB_PASS');
  const dbName = configService.get<string>('DB_NAME');

  if (!dbHost || !dbPort || !dbUsername || !dbPassword || !dbName) {
    console.error('Missing or incomplete database configuration in .env');
    process.exit(1); // Exit the application if the database configuration is incomplete
  }

  const dbConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: dbHost,
    port: dbPort,
    username: dbUsername,
    password: dbPassword,
    database: dbName,
    synchronize: true, // Chỉ sử dụng trong môi trường phát triển
    autoLoadEntities: true,
    entities: [join(__dirname, '..', 'entities/**/*{.js,.ts}')], // Đường dẫn đến thư mục entities trong thư mục dist
  };
  return dbConfig;
};
