import { AppController } from '@core/app.controller';
import { AppService } from '@core/app.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
