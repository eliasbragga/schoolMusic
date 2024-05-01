import { Component, Input } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { NgFor } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';

interface Instrument {
  url: string;
  name: string;
}

@Component({
  selector: 'app-learning-paths',
  standalone: true,
  templateUrl: './learning-paths.component.html',
  styleUrl: './learning-paths.component.scss',
  imports: [CardComponent,CarouselComponent,NgFor]
})
export class LearningPathsComponent {
  protected small = true;
  images: Instrument[] = [
    { url: '../../../assets/bateria.png', name: 'Bateria' },
    { url: '../../../assets/piano.png', name: 'Piano' },
    { url: '../../../assets/violao.jpg', name: 'Violão' }
  ];
  text = this.images.length > 0 ? this.images[0].name : 'Selecione um curso'; // Define o texto inicial como o nome da primeira imagem, se houver alguma imagem na lista

  updateText(name: string) {
    this.text = name;
  }
}
