import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from 'path'
import { UserModule } from './user/user.module';
import { ReviewModule } from './review/review.module';
import { Review } from "./review/entities/review.entity";
import { AuthModule } from './auth/auth.module';
import { BlobService } from './blob/blob.service';
import { ConfigModule } from "@nestjs/config";


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development.local'}`,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      username: process.env.DB_UN,
      password: process.env.DB_PASSWORD,
      port: 6543,
      database: 'postgres',
      entities: [Review],
      synchronize: true,
    }),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'public'), serveRoot: '/public'}),
    UserModule,
    ReviewModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, BlobService],
})
export class AppModule {}

