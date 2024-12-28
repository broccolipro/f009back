import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Review } from "./entities/review.entity";
import { AuthModule } from "../auth/auth.module";
import { BlobService } from "../blob/blob.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Review]),
    AuthModule
  ],
  controllers: [ReviewController],
  providers: [
    ReviewService,
    BlobService
  ],
})
export class ReviewModule {}
