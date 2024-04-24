import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { ContextService } from '../../service/context.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [NgFor, NgClass]
})
export class FooterComponent {
  links = [
    { name: 'Inicio', routePath: 'inicio', selected: true },
    { name: 'Comece por aqui', routePath: 'comece-por-aqui', selected: false },
    { name: 'Trilhas', routePath: 'trilhas', selected: false },
    { name: 'Suporte', routePath: 'suporte', selected: false}
  ];

  constructor(
    private contextService: ContextService
  ) {}

  selectLink(linkName: string) {
    const indexLink = this.links.findIndex(link => link.name === linkName)
    this.links.forEach(link => link.selected = false)
    if(indexLink !== -1) this.links[indexLink].selected = true
  }

  redirectRoute(route: string, link: string) {
    this.contextService.redirectRoute(route)
    this.selectLink(link)
  }

}
