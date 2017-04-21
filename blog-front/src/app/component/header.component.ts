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
	
	private menus: Menu[];
	private selectedMenu: Menu;

	constructor(private menuService: MenuService) {}

	getMenus(): void {
		this.menuService.getMenusByHttp()
			.then(response => {
				this.menus = response.json().data;
				console.log(this.menus);
			})
			.catch(e => console.log(e));
	}

	ngOnInit(): void {
		this.getMenus();
	}

	selectMenu(menu: Menu): void {
    	this.selectedMenu = menu;
  }

}