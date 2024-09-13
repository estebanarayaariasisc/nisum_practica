import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ZodiacSignsComponent } from './zodiac-signs/zodiac-signs.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ZodiacSignsComponent, MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'zodiac-signs-app';
  constructor(private router: Router){};

  goBack(): void {
    this.router.navigate(['/']);
  }
}


