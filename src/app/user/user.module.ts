import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserService } from '../shared/service/user.service';
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
@NgModule({
  imports: [
    CommonModule,FormsModule,MaterialModule
  ],
  declarations: [LoginComponent],
  providers: [UserService]
})
export class UserModule { }
