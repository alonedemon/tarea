import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule  } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from "@angular/common/http";
import { ArticleModule } from './article/article.module';
import { AuthService } from './shared/service/auth.service';
import { LoginAuthService } from './shared/service/login-auth.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    UserModule,
    MaterialModule,
    ArticleModule
  ],
  providers: [AuthService, LoginAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
