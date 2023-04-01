import { Controller, Get , Post, UploadedFiles, UseInterceptors} from '@nestjs/common';
import { AppService } from './app.service';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @UseInterceptors(
		FilesInterceptor('files')
	  )
  uploadVideo( @UploadedFiles() files: Array<Express.Multer.File> ) {

    return this.appService.uploadVideo(files);

  }
}
