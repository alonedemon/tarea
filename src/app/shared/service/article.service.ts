import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxJs/Observable";
import { Article } from "../model/article";

const ARTICLE:string="http://localhost:3000/posts";
@Injectable()
export class ArticleService {

  constructor(private http:HttpClient) { }

  getArticles(id:number):Observable<any>{
    return this.http.get(`${ARTICLE}/?userId=${id}`);
  }
  getArticle(id:number):Observable<any>{
    return this.http.get(`${ARTICLE}/?id=${id}`);
  }
  deleteArticle(id:number):Observable<any>{
    return this.http.delete(`${ARTICLE}/${id}`);
  }
  editArticle(article:Article):Observable<any>{
    return this.http.put(`${ARTICLE}/${article.id}`,article);
  }
  newArticle(article:Article):Observable<any>{
    return this.http.post(`${ARTICLE}`,article);
  }
}
