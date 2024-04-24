import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ContextService } from '../../service/context.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [NgFor]
})
export class FooterComponent {
  links = [
    { name: 'Inicio', routePath: 'inicio' },
    { name: 'Comece por aqui', routePath: 'comece-por-aqui' },
    { name: 'Trilhas', routePath: 'trilhas' },
    { name: 'Suporte', routePath: 'suporte'}
  ];

  constructor(
    private contextService: ContextService
  ) {}

  redirectRoute(route?: string) {
    this.contextService.redirectRoute(route)
  }

}
