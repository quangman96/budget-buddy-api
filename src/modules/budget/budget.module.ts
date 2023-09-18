import { Module } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BudgetController } from './budget.controller';
import Budget from '../../entities/Budget';

@Module({
  imports: [TypeOrmModule.forFeature([Budget])],
  controllers: [BudgetController],
  providers: [BudgetService],
})
export class BudgetModule {}
