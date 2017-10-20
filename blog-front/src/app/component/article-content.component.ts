import {Component, Input} from '@angular/core';
import {ArticleDesc} from "../entity/article-desc";

@Component({
  moduleId: module.id,
  selector: 'blog-article-content',
  templateUrl: 'template/article-content.component.html',
  styleUrls: ['css/article-content.component.css']
})
export class ArticleContentComponent  {

  @Input() desc:ArticleDesc;

}
