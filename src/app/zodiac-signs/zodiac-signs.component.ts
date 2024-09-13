import { Component, OnInit } from '@angular/core';
import { ZodiacService } from '../zodiac.service';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { EditSignDialogComponent } from '../edit-sign-dialog/edit-sign-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-zodiac-signs',
  standalone: true,
  imports: [
    CommonModule, FormsModule, MatListModule,
    MatCardModule, MatFormFieldModule, 
    MatButtonModule, MatInputModule,
    MatProgressSpinnerModule 
  ],
  templateUrl: './zodiac-signs.component.html',
  styleUrl: './zodiac-signs.component.css'
})

export class ZodiacSignsComponent implements OnInit {
  cols: number = 3;
  signs: any[] = [];
  tempSigns: any = {};
  localStorageItemName = 'signs';
  loading = true;

  constructor(
    private router: Router,
    private zodiacService: ZodiacService,
    public editDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.loadSigns();
  }

  async loadSigns() {
    try {
      // Se comprueba si los signos ya estan en el localStorage
      this.signs = JSON.parse(localStorage.getItem(this.localStorageItemName) || '[]');
      if (this.signs.length === 0) {
        // Se traen los signos del api desde el servicio
        const data = await this.zodiacService.getSigns();
        this.signs = data;
        this.updateLocalStorage();
      }
      this.loading = false;
    } catch (error) {
      this.loading = false;
      console.error('Error cargando los signos:', error);
    }
  }

  addSign(sign: any) {
    this.signs.push(sign);
    this.updateLocalStorage();
    this.tempSigns = { name: '', description: '' };
  }

  deleteSign(index: number) {
    this.signs.splice(index, 1);
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem(this.localStorageItemName, JSON.stringify(this.signs));
  }

  openEditDialog(sign: any): void {
    if(sign == null){
      sign = {name:'', da:'', new:true}
      
    }
    const dialogRef = this.editDialog.open(EditSignDialogComponent, {
      width: '600px',
      height: '500px',
      data: { name: sign.name, da: sign.da }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        sign.name = result.name;
        sign.da = result.da;
        if(sign.new){
          sign.new = false; 
          this.signs.push(sign);
        }
        this.updateLocalStorage();
      }
    });
  }

  setDefaultImage(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = 'images/Dragon.png';
  }

  goToSignInfo(sign: any) {
    this.router.navigate(['/info', sign]);
  }

  cleanLocalStorage(): void {
    // Limpia todo el localStorage
    localStorage.clear();
    window.location.reload();
  }
}


