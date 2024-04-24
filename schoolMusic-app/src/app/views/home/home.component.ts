import { Component, OnInit} from '@angular/core';
import { ContextService } from '../../service/context.service';
import { CardComponent } from '../../components/card/card.component';


@Component({
  standalone: true, 
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CardComponent]
})  
export class HomeComponent{
  numeroAtual?: number;
  constructor(
    private contextService: ContextService
  ) { }
  logouts() {
    this.contextService.logout()
  }

  }
