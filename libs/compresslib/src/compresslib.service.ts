import { Injectable } from '@nestjs/common';
import { fork } from 'child_process';

@Injectable()
export class CompresslibService {

     waitForChildMessage(child) {
        return new Promise((resolve, reject) => {
          child.on('message', (message) => {
            resolve(message);
          });
        });
      }

    async compressVideo(file: Express.Multer.File): Promise<Express.Multer.File> {

        const childProcess = fork('./utils/compress.utils.ts')

        childProcess.send(file)

        const filed: any = this.waitForChildMessage(childProcess)

        return filed



    }

}
