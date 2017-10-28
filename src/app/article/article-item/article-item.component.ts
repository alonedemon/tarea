import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ap-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {
  @Input() title:string="";
  constructor() { }

  ngOnInit() {
  }

}
