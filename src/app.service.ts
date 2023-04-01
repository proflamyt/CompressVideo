import { CompresslibService } from '@app/compresslib';
import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {
  constructor(
    private compress: CompresslibService
  ){}

  getHello(): string {
    return 'Hello World!';
  }

  async uploadVideo(files: Array<Express.Multer.File>) {

    const compressedFiles = files.map(file=> this.compress.compressVideo(file))

    const allf: Array<Express.Multer.File> = await Promise.all(compressedFiles)


  }
}
