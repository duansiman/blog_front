import { Component, OnInit }    from '@angular/core';

import { Menu } 				from './../entity/menu';
import { MenuService }          from './../service/menu.service';

@Component({
  moduleId: module.id,
  selector: 'blog-header',
  templateUrl: 'template/header.component.html',
  styleUrls: ['css/header.component.css']
})

export class HeaderComponent implements OnInit {

	menus: Menu[];
	selectedMenu: Menu;

	constructor(private menuService: MenuService) {}

	// getMenus(): void {
	// 	this.menuService.getMenusByHttp()
	// 		.then(response => {
	// 			this.menus = response.json().data;
	// 			console.log(this.menus);
	// 		})
	// 		.catch(e => console.log(e));
	// }

	ngOnInit(): void {
		//this.getMenus();
    this.menus = [
      { id:'1', name: '首页', img_url:'app/component/images/index/u4.png'},
      { id:'2', name: 'Java', img_url:'app/component/images/index/u10.png' },
      { id:'3', name: 'MySQL', img_url:'app/component/images/index/u12.png' },
      { id:'4', name: 'Linux', img_url:'app/component/images/index/u16.png' },
      { id:'5', name: 'NoSQL', img_url:'app/component/images/index/u20.png' },
      { id:'6', name: '前端', img_url:'app/component/images/index/u24.png' },
      { id:'7', name: 'Git', img_url:'app/component/images/index/u24.png' },
    ];
	}

	selectMenu(menu: Menu): void {
    	this.selectedMenu = menu;
  }

}
