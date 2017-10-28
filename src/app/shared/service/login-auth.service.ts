import { Injectable } from '@angular/core';
import { CanActivate,  Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
@Injectable()
export class LoginAuthService {

  constructor( private route:Router ) { }
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      let url: string = state.url;
      if(this.isLogged()){
        this.route.navigate(['/articles']);
        return false;
      }
      return true;
    }
    private isLogged():boolean{
      if(localStorage.getItem('user')){
        return true;
      }
    }
  }
