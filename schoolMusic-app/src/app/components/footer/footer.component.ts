import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { ContextService } from '../../service/context.service';
import { LinksMenu } from '../../interfaces/links-menu';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [NgFor, NgClass]
})
export class FooterComponent {
  links: Array<LinksMenu> = [];

  constructor(
    private contextService: ContextService
  ) {
    contextService.$linksMenuList.subscribe((value) => {
      this.links = value.slice()
    })
    this.removeItemSpace()
  }

  removeItemSpace() {
    const index = this.links.findIndex(item => item.space === true)
    if(index !== -1) this.links.splice(index, 1)
    
  }

  redirectRoute(route?: string) {
    this.contextService.redirectRoute(route)
  }
}
