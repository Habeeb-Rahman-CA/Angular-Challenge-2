import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  
  name: string = ''
  age: number = 0
  location: string = ''
}
