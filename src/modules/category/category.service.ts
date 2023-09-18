import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Category from '../../entities/Category';
import { Repository } from 'typeorm';
// import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}
  create(createCategoryDto: any) {
    return 'This action adds a new category';
  }

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: any) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
