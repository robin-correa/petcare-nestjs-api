import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceController } from './service.controller';

@Module({
  imports: [],
  controllers: [AppController, ServiceController],
  providers: [AppService],
})
export class AppModule {}
