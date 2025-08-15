import { Body, Controller, HttpCode, HttpException, HttpStatus, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { NotifyService } from '../services/notify.service';
import { NotifyDto } from '../dtos/notify.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';


@Controller('notificar')
export class NotifyController {
  constructor(private readonly notificationService: NotifyService) {}

  @Post()
  @HttpCode(HttpStatus.ACCEPTED)
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  @ApiOperation({ summary: 'Envia notificação' })
  @ApiBody({ type: NotifyDto })
  @ApiResponse({ status: 202, description: 'Mensagem enviada com sucesso.' })
  async notify(@Body() body: NotifyDto) {
    const { mensagemId, conteudoMensagem } = body;
    const mensageId = mensagemId?.trim();
    const messageContent = conteudoMensagem?.trim();
    await this.notificationService.publishNotification(mensageId, messageContent);
    return { mensageId };
  }
}