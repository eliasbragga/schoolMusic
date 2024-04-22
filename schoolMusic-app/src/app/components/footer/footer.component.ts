import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [NgFor]
})
export class FooterComponent {
  links = [
    { name: 'Inicio' },
    { name: 'Comece por aqui' },
    { name: 'Trilhas' },
    { name: 'Suporte' }
  ];

}
