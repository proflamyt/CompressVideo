import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompresslibModule } from '@app/compresslib';

@Module({
  imports: [CompresslibModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
