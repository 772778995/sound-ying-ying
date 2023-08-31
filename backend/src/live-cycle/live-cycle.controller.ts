import {
  BeforeApplicationShutdown,
  Controller,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { LiveCycleService } from './live-cycle.service';

@Controller('live-cycle')
export class LiveCycleController
  implements
    OnModuleInit,
    OnModuleDestroy,
    OnApplicationBootstrap,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor(private readonly liveCycleService: LiveCycleService) {}

  onModuleInit() {
    console.log(`liveCycle 模块初始化`);
  }

  onApplicationBootstrap() {
    console.log(`liveCycle 模块启动`);
  }

  onModuleDestroy() {
    console.log(`liveCycle 模块销毁`);
  }

  beforeApplicationShutdown(signal: string) {
    console.log(`liveCycle 模块终止之前：${signal}`);
  }

  onApplicationShutdown(signal: string) {
    console.log(`liveCycle 模块终止之后：${signal}`);
  }
}
