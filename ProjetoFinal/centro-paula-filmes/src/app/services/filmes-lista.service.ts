import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilmesListaService {
  private assistidosKey = 'assistidos';
  private queroAssistirKey = 'queroAssistir';

  getAssistidos(): any[] {
    return JSON.parse(localStorage.getItem(this.assistidosKey) || '[]');
  }

  getQueroAssistir(): any[] {
    return JSON.parse(localStorage.getItem(this.queroAssistirKey) || '[]');
  }

  adicionarAssistido(filme: any) {
    const assistidos = this.getAssistidos();
    if (!assistidos.find(f => f.id === filme.id)) {
      assistidos.push(filme);
      localStorage.setItem(this.assistidosKey, JSON.stringify(assistidos));
    }
  }

  removerAssistido(filme: any): void {
    const assistidos = this.getAssistidos();
    const atualizado = assistidos.filter(f => f.id !== filme.id);
    localStorage.setItem(this.assistidosKey, JSON.stringify(atualizado));
  }

  adicionarQueroAssistir(filme: any) {
    const quero = this.getQueroAssistir();
    if (!quero.find(f => f.id === filme.id)) {
      quero.push(filme);
      localStorage.setItem(this.queroAssistirKey, JSON.stringify(quero));
    }
  }

  removerQueroAssistir(filme: any): void {
    const quero = this.getQueroAssistir();
    const atualizado = quero.filter(f => f.id !== filme.id);
    localStorage.setItem(this.queroAssistirKey, JSON.stringify(atualizado));
  }

  isAssistido(id: number): boolean {
    return this.getAssistidos().some(f => f.id === id);
  }

  isQueroAssistir(id: number): boolean {
    return this.getQueroAssistir().some(f => f.id === id);
  }
}
