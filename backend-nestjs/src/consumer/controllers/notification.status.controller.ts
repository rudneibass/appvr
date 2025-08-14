import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { StatusStoreService } from '../services/status.store.service';

@Controller('notificacao')
export class NotificationStatusController {
  constructor(private readonly statusStore: StatusStoreService) {}

  @Get('status/:id')
  getStatus(@Param('id') id: string) {
    const status = this.statusStore.getStatus(id);
    if (!status) {
      throw new NotFoundException('Status não encontrado para o mensagemId informado.');
    }
    return { mensagemId: id, status };
  }
}