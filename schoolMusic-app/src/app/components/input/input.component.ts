import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Output() inputTextEvent = new EventEmitter<string>();
  @Input() typeInput!: string
  @Input() title!: string


  inputValue: string = ''

  emmitEvent(e: Event) {
    const q = e.target as HTMLInputElement
    this.inputTextEvent.emit(q.value);
  }

  receiveMessage() {
    this.inputTextEvent.emit(this.inputValue);
    this.clearInput()
  }

  inputValueChange(inputValue: any) {
    this.inputValue = inputValue.target.value
    
  }
  
  clearInput() {
    this.inputValue = '';
  }

}
