import { Module } from '@nestjs/common';
import { NotifyController } from './controllers/notify.controller';
import { NotifyService } from './services/notify.service';

@Module({
  imports: [],
  controllers: [NotifyController],
  providers: [NotifyService],
})
export class NotificationModule {}