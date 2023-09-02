import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LiveCycleModule } from './live-cycle/live-cycle.module';

@Module({
  imports: [LiveCycleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
