import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  UploadedFiles
} from "@nestjs/common";
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { JwtAuthGuard } from "../auth/jwt/JwtAuthGuard";
import { FilesInterceptor } from "@nestjs/platform-express";
import { Review } from "./entities/review.entity";

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  @UseInterceptors(FilesInterceptor('images'))
  create(@UploadedFiles() files: Express.Multer.File[],
         @Body() createReviewDto: CreateReviewDto
  ): Promise<Review> {
    return this.reviewService.create(createReviewDto, files);
  }

  @Get('/all')
  findAll(): Promise<Review[]> {
    return this.reviewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviewService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto) {
    return this.reviewService.update(+id, updateReviewDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewService.remove(+id);
  }
}
