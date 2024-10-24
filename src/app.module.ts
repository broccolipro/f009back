import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "./categories/category.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'aws-0-eu-central-1.pooler.supabase.com',  // or your PostgreSQL host
      port: 6543,
      username: 'postgres.lemorezacxlfopyjydqk',
      password: 'zohsU5-gafboh-zagtig',
      database: 'postgres',
      entities: [Category],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Category])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
