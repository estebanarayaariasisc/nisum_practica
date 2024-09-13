import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ZodiacService } from '../zodiac.service';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-more-info',
  standalone: true,
  imports: [
    MatCardModule, MatDividerModule, CommonModule,
    MatButtonModule, MatProgressSpinnerModule
  ],
  templateUrl: './sign-more-info.component.html',
  styleUrl: './sign-more-info.component.css'
})
export class SignMoreInfoComponent implements OnInit {
  message: string = 'No message';
  singinfo: any = {};
  loading = true;

  constructor(
    private actRouter: ActivatedRoute ,
    private router: Router,
    private zodiacService: ZodiacService
  ){}

  ngOnInit(): void {
    this.singinfo = "Cargando los datos";
    this.actRouter.paramMap.subscribe(params => {
      this.message = params.get('message') || 'No message';
    });
    this.loadSignInfo(this.message)
  }

  async loadSignInfo(sign: any) {
    try {
        const data = await this.zodiacService.getHoroscope(sign);
        this.singinfo = data.data.horoscope_data;
        this.loading = false;
    } catch (error) {
      this.singinfo = "Error cargando los datos de "+sign;
      this.loading = false;
    } 
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

}
