import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ArticleService } from '../shared/service/article.service';
import { ArticleItemComponent } from './article-item/article-item.component';
import { MaterialModule } from "../material/material.module";
import { ArticleFormComponent } from './article-form/article-form.component';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";
import { InfoComponent } from "../user/info/info.component";
import { DeleteArticleComponent } from './delete-article/delete-article.component';
@NgModule({
  imports: [
    CommonModule,MaterialModule,FormsModule
  ],
  declarations: [HomeComponent, ArticleItemComponent, ArticleFormComponent,InfoComponent, DeleteArticleComponent],
  providers: [ArticleService],
  entryComponents:[DeleteArticleComponent]
})
export class ArticleModule { }
