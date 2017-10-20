import {Component, OnInit} from '@angular/core';
import {ArticleDesc} from "../entity/article-desc";
import {ArticleService} from "../service/article.service";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'blog-article-list',
  templateUrl: 'template/article-list.component.html',
  styleUrls: ['css/article-list.component.css']
})
export class ArticleListComponent implements OnInit  {

  articleLists:ArticleDesc[];
  images = ['../../../assets/images/img_1.jpg','../../../assets/images/img_2.jpg',
  '../../../assets/images/img_3.jpg','../../../assets/images/img_4.jpg'];

  constructor(private router: Router, private articleService: ArticleService) { }

  ngOnInit(): void {
      this.articleService.getArticles(-1,0, 10)
        .then( articleLists => {
          this.articleLists=articleLists;
          this.articleLists.forEach((value, index) => {
            value.cover = this.images[index % 4];
          })
        });

  }

  gotoArticleContent(desc): void {
    this.router.navigate(['/article-content', desc]);
  }

}
