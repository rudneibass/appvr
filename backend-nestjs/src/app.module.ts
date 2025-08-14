import { Module } from '@nestjs/common';
import { NotificationModule } from './notification/notification.module';
import { ConsumerModule } from './consumer/consumer.module';

@Module({
  imports: [NotificationModule, ConsumerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
