import {Component, OnInit} from '@angular/core';
import {ArticleDesc} from "../entity/article-desc";
import {ArticleService} from "../service/article.service";

@Component({
  moduleId: module.id,
  selector: 'blog-article-ranking',
  templateUrl: 'template/article-ranking.component.html',
  styleUrls: ['css/article-ranking.component.css']
})
export class ArticleRankingsComponent implements OnInit{

  rankingLists:ArticleDesc[];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.rankingLists = this.articleService.getArticlesByRanking();
  }
}
