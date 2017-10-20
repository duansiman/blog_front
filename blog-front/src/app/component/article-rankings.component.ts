import {Component, OnInit} from '@angular/core';
import {ArticleDesc} from "../entity/article-desc";
import {ArticleService} from "../service/article.service";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'blog-article-ranking',
  templateUrl: 'template/article-ranking.component.html',
  styleUrls: ['css/article-ranking.component.css']
})
export class ArticleRankingsComponent implements OnInit{

  rankingLists:ArticleDesc[];


  constructor(private router: Router, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getArticlesByRanking(-1,0, 10)
      .then( articleLists => {
        this.rankingLists=articleLists;
      });
  }

  gotoArticleContent(desc): void {
    this.router.navigate(['/article-content', desc]);
  }
}
