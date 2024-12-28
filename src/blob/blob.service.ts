import { Injectable } from '@nestjs/common';
import { put, PutBlobResult } from "@vercel/blob";

@Injectable()
export class BlobService {
 async upload(files: Express.Multer.File[]): Promise<string[]> {
   const putBlobResults: Promise<PutBlobResult>[] = files.map((file) => {
     return put(file.originalname, file.buffer, { access: 'public'});
   })
   return (await Promise.all(putBlobResults)).map((file: PutBlobResult) => file.url)
  }
}

