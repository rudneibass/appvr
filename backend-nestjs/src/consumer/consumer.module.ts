import { Module } from '@nestjs/common';
import { NotificationConsumer } from './services/notification.consumer.service';
import { StatusStoreService } from './services/status.store.service';
import { NotificationStatusController } from './controllers/notification.status.controller';

@Module({
  controllers: [NotificationStatusController],
  providers: [NotificationConsumer, StatusStoreService],
  exports: [StatusStoreService],
})
export class ConsumerModule {}