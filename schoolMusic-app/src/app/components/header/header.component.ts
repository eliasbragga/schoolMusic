import { Component } from '@angular/core';
import { NgFor,NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [NgFor, NgClass]
})
export class HeaderComponent {
  links = [
    { name: 'Inicio' },
    { space: true },
    { name: 'Comece por aqui' },
    { name: 'Trilhas' },
    { name: 'Suporte' }
  ];
}
