import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "./categories/category.entity";
import { Repository } from "typeorm";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectRepository(Category) private categoryRepository: Repository<Category>
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/api/categories')
  async getText(): Promise<string> {
    const data = await this.categoryRepository.find();
    console.log('data');
    return JSON.stringify(data);
  }
}
