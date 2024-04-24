import { Component } from '@angular/core';
import { NgFor,NgClass } from '@angular/common';
import { ContextService } from '../../service/context.service';
import { LinksMenu } from '../../interfaces/links-menu';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [NgFor, NgClass]
})
export class HeaderComponent {
  links: Array<LinksMenu> = [];
  spaceItem: {space: boolean} = {space: true}

  constructor(  
    private contextService: ContextService
  ){
    contextService.$linksMenuList.subscribe((value) => {
      this.links = value.slice()
    })
  }

  redirectRoute(route?: string, linkName?: string) {
    this.contextService.redirectRoute(route)
    this.contextService.selectLink(linkName)
  }
}
