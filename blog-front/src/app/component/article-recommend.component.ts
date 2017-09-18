import {Component, OnInit} from '@angular/core';
import {ArticleDesc} from "../entity/article-desc";
import {ArticleService} from "../service/article.service";

@Component({
  moduleId: module.id,
  selector: 'blog-article-recommend',
  templateUrl: 'template/article-recommend.component.html',
  styleUrls: ['css/article-recommend.component.css']
})
export class ArticleRecommendComponent implements OnInit{
  recommendLists:ArticleDesc[];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.recommendLists = this.articleService.getArticlesByRecommend();
  }
}
