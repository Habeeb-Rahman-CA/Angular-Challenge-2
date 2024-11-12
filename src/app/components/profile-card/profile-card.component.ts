import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  
  @Input() name: string = ''
  @Input() age: number = 0
  @Input() location: string = ''

  @Output() greet = new EventEmitter<string>()

  greetings(){
    const message = `Welcome, ${this.name} from ${this.location}!`
    this.greet.emit(message)
    this.name = ''
    this.age = 0
    this.location = ''
  }
}
