import { Component, OnInit,Input}    from '@angular/core';

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

    ngOnInit(): void {
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
