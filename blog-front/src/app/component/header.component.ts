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

	constructor(
    	public menuService: MenuService
    ) { }

	  getMenus(): void {
	    this.menuService.getMenusByHttp()
				.then(response => {
					response.json().data as Menu[];
				})
				.catch(e => console.log(e));
	  }

	ngOnInit(): void {
		this.getMenus();
		console.log(this.menus);
	}

	selectMenu(menu: Menu): void {
    	this.selectedMenu = menu;
  	}

}