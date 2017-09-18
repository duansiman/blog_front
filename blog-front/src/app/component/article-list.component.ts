import {Component, OnInit} from '@angular/core';
import {ArticleDesc} from "../entity/article-desc";
import {ArticleService} from "../service/article.service";

@Component({
  moduleId: module.id,
  selector: 'blog-article-list',
  templateUrl: 'template/article-list.component.html',
  styleUrls: ['css/article-list.component.css']
})
export class ArticleListComponent implements OnInit  {

  articleLists:ArticleDesc[];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
      this.articleLists = this.articleService.getArticlesByHome();
  }

}
