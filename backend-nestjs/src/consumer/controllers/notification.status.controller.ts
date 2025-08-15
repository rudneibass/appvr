import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { StatusStoreService } from '../services/status.store.service';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('notificacao')
export class NotificationStatusController {
  constructor(private readonly statusStore: StatusStoreService) {}

  @Get('status/:id')
  @ApiOperation({ summary: 'Consulta o status de uma notificação pelo mensagemId' })
  @ApiParam({ name: 'id', description: 'UUID da mensagem' })
  @ApiResponse({ status: 200, description: 'Status encontrado', schema: { example: { mensagemId: 'uuid', status: 'sucesso' } } })
  @ApiResponse({ status: 404, description: 'Status não encontrado para o mensagemId informado.' })
  getStatus(@Param('id') id: string) {
    const status = this.statusStore.getStatus(id);
    if (!status) {
      throw new NotFoundException('Status não encontrado para o mensagemId informado.');
    }
    return { mensagemId: id, status };
  }
}