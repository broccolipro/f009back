import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from "class-validator";

export class CreateReviewDto {
  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  @IsNotEmpty()
  text: string

  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number

  @IsArray()
  @IsOptional()
  imageSet?: any[]
}
