import { Module } from '@nestjs/common';
import { CompresslibService } from './compresslib.service';

@Module({
  providers: [CompresslibService],
  exports: [CompresslibService],
})
export class CompresslibModule {}
