import { Component } from '@angular/core';
import { AuthService } from "./shared/service/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: 'ap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ap';
  constructor(private router:Router,
  private auth:AuthService){}
  salir():void{
    this.auth.salir();
    this.router.navigate(["/login"]);
  }
}
