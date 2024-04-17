import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [NgFor]
})
export class HeaderComponent {
  links = [
    { name: 'Comece por aqui' },
    { name: 'Trilhas' },
    { name: 'Suporte' }
  ];
}
