import { Component, OnInit } from '@angular/core';
import { User } from "../../shared/model/user";
import { UserService } from "../../shared/service/user.service";
import { Router } from "@angular/router";
import { AuthService } from "../../shared/service/auth.service";
@Component({
  selector: 'ap-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User={}
  error:boolean=false;
  constructor(private userService:UserService,
    private route:Router,
    private auth:AuthService) { }

  ngOnInit() {
  }
  validate(){
    console.log(this.user.username);
    this.userService.login(this.user.username).
      subscribe(
        (data)=>{
          if(data[0]){
            this.user = data[0];
            this.login();
          }
          else{
            this.error=true;
          }
        }
      );
  }
  login():void{
      this.userService.getPhoto(this.user.id)
        .subscribe(
          (data)=>{
            if(data[0]){
              this.user.thumbnailUrl = data[0]['thumbnailUrl'];
            }
            else{
                this.user.thumbnailUrl=this.userService.getDefaultPhoto();
            }
            this.auth.login(this.user);
            this.route.navigate(["/articles"]);
          }
        );
  }
}
