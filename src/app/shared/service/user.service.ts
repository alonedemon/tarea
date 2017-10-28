import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Response } from "@angular/http";
import { Observable } from "rxjs";
import { User } from "../model/user";
import { isEmpty } from "../tool/tool";
const USER:string="http://localhost:3000/users/";
const PHOTO:string="http://localhost:3000/photos/";
const defaultPhoto:string="https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwi5i-r2x5LXAhWIfpAKHQJ1COcQjRwIBw&url=https%3A%2F%2Fwww.walmart.com%2Fip%2FSuavitel-Fabric-Condtioner-Field-Flowers-135-Oz%2F42386801&psig=AOvVaw3gGI6PGXG-uxOIKuGk7c18&ust=1509254126800053";
@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }

  login(username:string):Observable<any>{
    return this.http.get(`${USER}?username=${username}`);
  }
  getPhoto(id:number):Observable<any>{
    return this.http.get(`${PHOTO}?id=${id}`);
  }
  getDefaultPhoto():string{
    return defaultPhoto;
  }
}
