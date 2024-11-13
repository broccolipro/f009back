import { Controller, Get, Res } from "@nestjs/common";
import { AppService } from './app.service';
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "./categories/category.entity";
import { Repository } from "typeorm";
import {Response} from "express";
import * as path from "path";

let isThereUpdates = false;

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectRepository(Category) private categoryRepository: Repository<Category>
  ) {}

  @Get()
  getHello(@Res() res: Response) {
    return 'hello'
  }
  @Get('/api/categories')
  async getText(): Promise<string> {
    const data = await this.categoryRepository.find();
    console.log('data');
    return JSON.stringify(data);
  }

  @Get('api/isThereUpdates')
  async getUpdatesAvailability() {
    console.log('Query for updates');
    // await new Promise((resolve, reject) => setTimeout(() => resolve(), 3000))
    return  JSON.stringify(isThereUpdates)
  }

  @Get('api/setUpdates')
  async setUpdates() {
    isThereUpdates = !isThereUpdates;

    return JSON.stringify(isThereUpdates)
  }
}
