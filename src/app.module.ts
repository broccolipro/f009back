import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "./categories/category.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',  // or your PostgreSQL host
      port: 5432,
      username: 'den',
      password: 'den',
      database: 'f009',
      entities: [Category],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Category])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
