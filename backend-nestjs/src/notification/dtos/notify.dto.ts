import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class NotifyDto {
  @IsUUID('4', { message: 'O campo mensagemId deve ser um UUID v4 válido' })
  @IsNotEmpty({ message: 'O campo mensagemId não pode ser vazio' })
  mensagemId: string;

  //@IsString()
  @IsNotEmpty({ message: 'O campo conteudoMensagem não pode ser vazio' })
  conteudoMensagem: string;
}