import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  
  MatCardModule,
  MatGridListModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatDialogModule
} from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  declarations: [],
  exports:[MatCardModule,
    MatGridListModule,MatToolbarModule,MatProgressSpinnerModule,
    MatDialogModule]
})
export class MaterialModule { }
