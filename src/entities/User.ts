import { Column, Entity } from 'typeorm';
import BaseEntity from './BaseEntity';
import { Logger } from '@nestjs/common';

@Entity('user')
export default class User extends BaseEntity {
  private readonly logger = new Logger(User.name);
  constructor() {
    super();
    this.logger.log(`User entity loaded.`);
  }

  @Column({ name: 'name', type: 'varchar', length: 255, nullable: true })
  name: string | null;

  @Column({ name: 'birthday', type: 'date', nullable: true })
  birthday: Date | string | null;

  @Column({ name: 'email', type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({
    name: 'phone_number',
    type: 'varchar',
    length: 20,
    nullable: true,
    unique: true,
  })
  phoneNumber: string | null;

  @Column({ name: 'password', type: 'text' })
  password: string;

  @Column({ name: 'avatar', type: 'varchar', length: 255, nullable: true })
  avatar: string | null;
}
