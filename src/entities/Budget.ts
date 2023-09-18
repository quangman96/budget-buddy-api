import { Column, Entity, Index } from 'typeorm';
import BaseEntity from './BaseEntity';

@Entity('budget')
export default class Budget extends BaseEntity {
  @Index()
  @Column({ name: 'user_id', type: 'int' })
  userId: number;

  @Index()
  @Column({ name: 'category_id', type: 'int' })
  categoryId: number;

  @Column({
    name: 'type',
    type: 'tinyint',
    comment: '1: deposit, 2: withdrawal',
  })
  type: number;

  @Column({
    name: 'amount',
    type: 'int',
  })
  amount: number;

  @Column({ name: 'remark', type: 'varchar', length: 255, nullable: true })
  remark: string;
}
