import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  userName: string = ''
  userAge: number = 0
  userLocation: string = ''
  greetMessage: string = ''
 
  onReceiveGreet(message: string){
    this.greetMessage = message
  }

  resetForm(){
    this.greetMessage = ''
  }

}
