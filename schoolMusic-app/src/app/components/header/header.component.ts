import { Component } from '@angular/core';
import { NgFor,NgClass } from '@angular/common';
import { ContextService } from '../../service/context.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [NgFor, NgClass]
})
export class HeaderComponent {
  links = [
    { name: 'Inicio', routerPath:'inicio' },
    { space: true },
    { name: 'Comece por aqui', routerPath:'comece-por-aqui' },
    { name: 'Trilhas', routerPath:'trilhas' },
    { name: 'Suporte', routerPath:'suporte' }
  ];

  constructor(
    private contextService: ContextService
  ){}

  redirectRoute(route?: string) {
    this.contextService.redirectRoute(route)
  }
}
