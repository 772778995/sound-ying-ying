import { Module } from '@nestjs/common';
import { LiveCycleService } from './live-cycle.service';
import { LiveCycleController } from './live-cycle.controller';

@Module({
  controllers: [LiveCycleController],
  providers: [LiveCycleService]
})
export class LiveCycleModule {}
