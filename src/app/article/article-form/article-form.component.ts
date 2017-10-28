import { Component, OnInit } from '@angular/core';
import { Article } from "../../shared/model/article";
import { ArticleService } from "../../shared/service/article.service";
import { ActivatedRoute,Router } from "@angular/router";
import { AuthService } from "../../shared/service/auth.service";
import { User } from "../../shared/model/user";
@Component({
  selector: 'ap-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {
  titleForm:string="Nuevo articulo";
  article:Article={};
  type:string="new";
  typeButton:string="Nuevo";
  message:string;
  notFound:boolean=false;
  constructor(private articleService:ArticleService,
    private route:ActivatedRoute,
    private auth:AuthService,
    private nav:Router
  ) { }

  ngOnInit() {
    let id=this.route.snapshot.params['id'];
    if(id){
      this.titleForm="Editar articulo";
      this.type="edit";
      this.typeButton="Editar";
      this.loadArticle(id);
    }
    else{
      id=this.auth.getUserData().id;
      this.article.userId=id;
    }
  }
  validate(){
    if(this.type=="edit"){
      this.articleService.editArticle(this.article)
        .subscribe(
          ()=>{
           this.message="Articulo editado"; 
           this.redirect();
          },
          ()=>{
            this.message="No se pudo editar el articulo"; 
          }
        );
    }
    else{
      this.articleService.newArticle(this.article)
        .subscribe(
          ()=>{
          this.message="Articulo creado"; 
          this.redirect();
          },
          ()=>{
            this.message="No se pudo crear el articulo"; 
          }
        );
    }
  }
  redirect():void{
    setTimeout(()=>{
      this.nav.navigate(["/articles"])
    },2000);
  }
  cancel():void{
    if(this.type=="edit"){
      this.loadArticle(this.article.id);
    }
    else{
      this.article={};
    }
  }
  private loadArticle(id:number):void{
    this.articleService.getArticle(id)
    .subscribe(
      (data)=>{
        let user = this.auth.getUserData();
        if(user.id==data[0]['userId']){
          this.article=data[0];
        }
        else{
          this.notFound=true;
        }
      }
    );
  }
}
