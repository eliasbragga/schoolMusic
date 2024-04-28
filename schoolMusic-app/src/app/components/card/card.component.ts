import { NgClass, NgIf } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { ContextService } from '../../service/context.service';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  imports: [NgIf]

})
export class CardComponent {
  constructor(
    private contextService: ContextService
  ) { }
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() small!: boolean;
  @Input() pathRoute: string = '';


  redirectRoute() {
    if (this.pathRoute) { this.contextService.redirectRoute(this.pathRoute) }
  }
}
