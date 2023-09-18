import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';

export default class BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int', unsigned: true })
  id: number;

  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  createdAt: string | Date;

  @Column('int', { name: 'created_by', nullable: true, unsigned: true })
  createdBy: number | null;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @Column('int', { name: 'updated_by', nullable: true, unsigned: true })
  updatedBy: number | null;
}
