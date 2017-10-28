import { Injectable } from '@angular/core';
import { CanActivate,  Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { User } from "../model/user";
@Injectable()
export class AuthService implements CanActivate{

  constructor( private route:Router ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    if(this.isLogged()){
      return true;
    }
    this.route.navigate(['/login']);
    return false;
  }
  private isLogged():boolean{
    if(localStorage.getItem('user')){
      return true;
    }
    return false;
  }
  public login(user:User):void{
    localStorage.setItem("user",JSON.stringify(
      {
        id:user.id,
        username:user.username,
        name:user.username,
        email:user.email,
        thumbnailUrl:user.thumbnailUrl
      }
    ));
  }
  public getUserData():User{
    return JSON.parse(localStorage.getItem("user"));
  }
  public salir():void{
    localStorage.removeItem("user");
  }
}
