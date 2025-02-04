import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataService } from './data/data.service';
import { DataController } from './data/data.controller';
import { DataModule } from './data/data.module';

@Module({
  imports: [DataModule],
  controllers: [AppController, DataController],
  providers: [AppService, DataService],
})
export class AppModule {}
