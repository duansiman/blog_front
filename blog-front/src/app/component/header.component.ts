import { Component, OnInit}    from '@angular/core';

import {CategoryService} from "../service/category.service";
import {Category} from "../entity/category";

@Component({
  moduleId: module.id,
  selector: 'blog-header',
  templateUrl: 'template/header.component.html',
  styleUrls: ['css/header.component.css','css/base.css','css/main.css','css/index.css']
})

export class HeaderComponent implements OnInit {

  	isShowAbout = false;
    isShowCategory = false;
    isShowDiary = false;

    categories: Category[];

    constructor(private categoryService: CategoryService) { }

    ngOnInit(): void {
      this.categories = this.categoryService.getCategory();
    }

  	showAbout():void {
  		this.isShowAbout = true;
  	}

  	hideAbout(): void {
  		this.isShowAbout = false;
  	}

    showCategory():void {
      this.isShowCategory = true;
    }

    hideCategory(): void {
      this.isShowCategory = false;
    }

    showDiary():void {
      this.isShowDiary = true;
    }

    hideDiary(): void {
      this.isShowDiary = false;
    }

}
