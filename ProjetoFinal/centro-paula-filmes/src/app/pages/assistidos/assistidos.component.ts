import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assistidos',
  imports: [],
  templateUrl: './assistidos.component.html',
  styleUrl: './assistidos.component.css'
})
export class AssistidosComponent {
 constructor(private router: Router) { }

  goToEvents(): void {
    this.router.navigate(['/assistidos']);
  }
}
