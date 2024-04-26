import { Component, Input } from '@angular/core';
import { ContextService } from '../../service/context.service';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  constructor(
    private contextService: ContextService
  ) {}
  @Input() imageUrl!: string;
  @Input() pathRoute: string = '';


  redirectRoute() {
    this.contextService.redirectRoute(this.pathRoute)
  }
}
