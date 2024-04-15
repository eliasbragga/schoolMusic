import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';


@Component({
  standalone: true,
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  imports: [MatButtonModule]
})
export class ButtonComponent {
  @Output() eventClick = new EventEmitter()
  @Input() title!: string

  emittedEventClick() {
    this.eventClick.emit()
  }

}
