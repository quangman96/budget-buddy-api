import { Injectable } from '@nestjs/common';

@Injectable()
export class BudgetService {
  create(createBudgetDto: any) {
    return 'This action adds a new budget';
  }

  findOne(id: number) {
    return `This action returns a #${id} budget`;
  }

  update(id: number, updateBudgetDto: any) {
    return `This action updates a #${id} budget`;
  }

  remove(id: number) {
    return `This action removes a #${id} budget`;
  }
}
