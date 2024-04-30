import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  imports: [NgFor]
})
export class CarouselComponent {
  images: string[] = [
    '../../../assets/violao.jpg',
    '../../../assets/violao.jpg',
    '../../../assets/violao.jpg',
    '../../../assets/violao.jpg',
    '../../../assets/violao.jpg',
    '../../../assets/violao.jpg',
    '../../../assets/violao.jpg',
    '../../../assets/violao.jpg',
    '../../../assets/violao.jpg',
  ];
  
}