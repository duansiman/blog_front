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
      { id:'1', name: '首页' },
      { id:'2', name: 'Java' },
      { id:'3', name: 'MySQL' },
      { id:'4', name: 'Linux' },
      { id:'5', name: 'NoSQL' },
      { id:'6', name: '前端' },
      { id:'7', name: 'Git' },
    ];
	}

	selectMenu(menu: Menu): void {
    	this.selectedMenu = menu;
  }

}
