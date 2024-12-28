import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Review } from "./entities/review.entity";
import { BlobService } from "../blob/blob.service";

@Injectable()
export class ReviewService {

  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
    private readonly blobService: BlobService
  ) {}

  async create(dto: CreateReviewDto, files: Express.Multer.File[]): Promise<Review> {
    const imageSet: string[] = await this.blobService.upload(files)
    const review = new Review()
    review.text = dto.text
    review.rating = dto.rating
    review.imageSet = imageSet

    return this.reviewRepository.save(review)
  }

  findAll() {
    return this.reviewRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} review`;
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return `This action updates a #${id} review`;
  }

  remove(id: number) {
    return `This action removes a #${id} review`;
  }
}
