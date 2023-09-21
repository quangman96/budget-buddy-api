import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BudgetService } from './budget.service';

@Controller('api/budget')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Post()
  create(@Body() createBudgetDto: any) {
    return this.budgetService.create(createBudgetDto);
  }

  @Get('user/:id')
  findOne(@Param('id') id: string) {
    return this.budgetService.findOne(+id);
  }

  @Patch('user/:id')
  update(@Param('id') id: string, @Body() updateBudgetDto: any) {
    return this.budgetService.update(+id, updateBudgetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.budgetService.remove(+id);
  }
}
