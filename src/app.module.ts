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
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'aws-0-eu-central-1.pooler.supabase.com',
      port: 6543,
      username: 'postgres.lemorezacxlfopyjydqk',
      password: 'zohsU5-gafboh-zagtig',
      database: 'postgres',
      entities: [Review],
      synchronize: true,
    }),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'public'), serveRoot: '/public'}),
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule available throughout the application
      envFilePath: `.env.${process.env.NODE_ENV || 'development.local'}`, // Load environment-specific file
    }),
    UserModule,
    ReviewModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, BlobService],
})
export class AppModule {}

