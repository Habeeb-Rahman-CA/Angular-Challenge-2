import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'profile-card';
}
