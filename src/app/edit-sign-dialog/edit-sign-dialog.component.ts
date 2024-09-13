import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogClose, MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-sign-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule, FormsModule, MatDialogClose, CommonModule,
    MatDialogActions, MatDialogContent, MatInputModule, MatButtonModule
  ],
  templateUrl: './edit-sign-dialog.component.html',
  styleUrl: './edit-sign-dialog.component.css'
})

export class EditSignDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EditSignDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public sign: {name: string, da: string}
  ) {}

  editSign(): void {
    this.dialogRef.close(this.sign);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
