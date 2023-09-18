import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import BaseEntity from './BaseEntity';

@Entity('category')
export default class Category extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int', unsigned: true })
  id: number;

  @Column({ name: 'name', type: 'varchar', length: 255 })
  name: string;

  @Column({
    name: 'type',
    type: 'tinyint',
    comment: '1: master, 2: custom',
  })
  type: number;
}
