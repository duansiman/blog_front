import {Component, OnInit} from '@angular/core';
import {ArticleDesc} from "../entity/article-desc";
import {ArticleService} from "../service/article.service";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'blog-article-recommend',
  templateUrl: 'template/article-recommend.component.html',
  styleUrls: ['css/article-recommend.component.css']
})
export class ArticleRecommendComponent implements OnInit{
  recommendLists:ArticleDesc[];
  images = ['../../../assets/images/01.jpg','../../../assets/images/02.jpg',
    '../../../assets/images/03.jpg','../../../assets/images/04.jpg',
    '../../../assets/images/06.jpg'];

  constructor(private router: Router, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getArticlesByRanking(-1,0, 10)
      .then( articleLists => {
        this.recommendLists=articleLists;
        this.recommendLists.forEach((value, index) => {
          value.cover = this.images[index % 4];
        })
      });
  }

  gotoArticleContent(desc): void {
    this.router.navigate(['/article-content', desc]);
  }
}
