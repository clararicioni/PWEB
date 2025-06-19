import { Component, OnInit } from '@angular/core';
import { FilmesListaService } from '../../services/filmes-lista.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assistir',
  imports: [CommonModule],
  templateUrl: './assistir.component.html',
  styleUrl: './assistir.component.css'
})
export class AssistirComponent implements OnInit{
  queroAssistir: any[] = [];

  constructor(private listaService: FilmesListaService) {}

  ngOnInit(): void {
    this.queroAssistir = this.listaService.getQueroAssistir() || [];
  }
}
