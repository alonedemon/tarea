import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./user/login/login.component";
import { HomeComponent,ArticleFormComponent } from "./article/index";
import { AuthService } from "./shared/service/auth.service";
import { LoginAuthService } from "./shared/service/login-auth.service";
const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    canActivate:[LoginAuthService]
  },
  {
    path:'articles',
    component:HomeComponent,
    canActivate:[AuthService]
  },
  {
    path:'article/edit/:id',
    component:ArticleFormComponent,
    canActivate:[AuthService]
  },
  {
    path:'article/new',
    component:ArticleFormComponent,
    canActivate:[AuthService]
  },
  {
    path:'',
    redirectTo:"login",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
