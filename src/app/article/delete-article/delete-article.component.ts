import { Component, OnInit,Inject } from '@angular/core';
import { ArticleService } from "../../shared/service/article.service";
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material';
@Component({
  selector: 'ap-delete-article',
  templateUrl: './delete-article.component.html',
  styleUrls: ['./delete-article.component.css']
})
export class DeleteArticleComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private articleService:ArticleService,
  public dialogRef: MatDialogRef<DeleteArticleComponent>) { }
  ngOnInit() {
  }
  delete():void{
    this.articleService.deleteArticle(this.data.id).subscribe(
      ()=>{
          this.dialogRef.close();
          location.reload();
      }
    );
  }
}
