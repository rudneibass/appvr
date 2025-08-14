import { Injectable } from '@nestjs/common';

@Injectable()
export class StatusStoreService {
  private readonly statusMap = new Map<string, string>();

  setStatus(mensagemId: string, status: string) {
    this.statusMap.set(mensagemId, status);
  }

  getStatus(mensagemId: string): string | undefined {
    return this.statusMap.get(mensagemId);
  }
}