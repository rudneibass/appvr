### Projeto: Sistema de Notificações com NestJS, RabbitMQ e Angular
Overview
Este projeto implementa um sistema de notificações assíncronas utilizando:

NestJS para a API backend.
RabbitMQ para mensageria.
Angular para o frontend (opcional).
Docker Compose para orquestração dos serviços.
Funcionalidades principais:

Envio de notificações via endpoint HTTP.
Processamento assíncrono das mensagens por meio de fila RabbitMQ.
Consulta do status da notificação via endpoint HTTP.
Documentação interativa da API com Swagger.
Como rodar o projeto com Docker
Clone o repositório:


git clone <url-do-repositorio>cd appvr
Suba os containers com Docker Compose:


docker-compose up --build
Isso irá iniciar:

O backend NestJS em modo desenvolvimento (porta 3000).
O RabbitMQ com painel de administração (portas 5672 e 15672).
Acesse o painel do RabbitMQ (opcional):

URL: http://localhost:15672
Usuário: admin
Senha: admin
Endpoints principais
POST /api/notificar
Envia uma notificação para processamento assíncrono.
GET /notificacao/status/:id
Consulta o status da notificação pelo mensagemId.
Acessando a documentação Swagger
Após subir o projeto, acesse:


http://localhost:3000/api-docs
Lá você encontrará a documentação interativa dos endpoints, podendo testar as requisições diretamente pela interface.

Observações
Certifique-se de que as portas 3000, 5672 e 15672 estão livres em sua máquina.
O frontend Angular pode ser desenvolvido separadamente para consumir esses endpoints.
Dúvidas ou problemas? Consulte os arquivos README ou abra uma issue no repositório!
