import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { LiveCycleModule } from './live-cycle/live-cycle.module';

@Module({
  imports: [PersonModule, LiveCycleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
