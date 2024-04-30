import { Component, Input } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { NgFor } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';


@Component({
  selector: 'app-learning-paths',
  standalone: true,
  templateUrl: './learning-paths.component.html',
  styleUrl: './learning-paths.component.scss',
  imports: [CardComponent,CarouselComponent,NgFor]
})
export class LearningPathsComponent {
  protected small = true;
  images = [
    { url: '../../../assets/bateria.png' },
    { url: '../../../assets/piano.png' },
    { url: '../../../assets/violao.jpg' }
  ];
  items = [
    { image: 'https://via.placeholder.com/150' },
    { image: 'https://via.placeholder.com/150' },
    { image: 'https://via.placeholder.com/150' },
    ];
}
