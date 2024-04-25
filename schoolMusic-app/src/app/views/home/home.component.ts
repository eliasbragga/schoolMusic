import { Component, OnInit} from '@angular/core';
import { ContextService } from '../../service/context.service';
import { CardComponent } from '../../components/card/card.component';
import { NgFor } from '@angular/common';

@Component({
  standalone: true, 
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CardComponent,NgFor]
})  
export class HomeComponent{
  numeroAtual?: number;
  images = [
    { url: '../../../assets/bateria.png' },
    { url: '../../../assets/piano.png' },
    { url: '../../../assets/violao.jpg' }
  ];
  constructor(
    private contextService: ContextService
  ) { }
  logouts() {
    this.contextService.logout()
  }

  }
