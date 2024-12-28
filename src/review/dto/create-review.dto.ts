import { IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";
import { Transform } from "class-transformer";

export class CreateReviewDto {
  // @IsString()
  // @IsNotEmpty()
  // title: string

  @IsString()
  @IsNotEmpty()
  text: string

  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number
  //
  // @IsArray()
  // @IsOptional()
  // imageSet?: File[]
}
