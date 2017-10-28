import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../../shared/service/article.service";
import { Article } from "../../shared/model/article";
import { Router } from "@angular/router";
import { AuthService } from "../../shared/service/auth.service";
import { User } from "../../shared/model/user";
import { MatDialog } from "@angular/material";
import { DeleteArticleComponent } from "../delete-article/delete-article.component";
@Component({
  selector: 'ap-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles:Article[]=[];
  user:User={};
  defaultImage:string="https://i0.wp.com/www.homoinvestor.com/wp-content/uploads/2017/01/Los-cuatro-jinetes.png?fit=852%2C480";
  constructor(private articleService:ArticleService,
    private route:Router,
    private auth:AuthService,
    private dialog:MatDialog) { }

  ngOnInit() {
    this.user=this.auth.getUserData();
    if(this.user){
      this.articleService.getArticles(this.user.id).
      subscribe(
        (data)=>{
          this.articles=data;
          console.log(data);
        }
      );
    }
  }
  editar(id:number):void{
    this.route.navigate(['/article/edit',id]);
  }
  borrar(id:number):void{

    const dialogRef = this.dialog.open(DeleteArticleComponent, {
      height: '200px',
      width:'300px',
      data:{id:id}
    });
  }
  nuevo():void{
    this.route.navigate(['/article/new']);
  }
}
