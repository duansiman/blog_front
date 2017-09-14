import { Component, Input, OnInit } from '@angular/core';

import { Menu } 			from '../entity/menu';
import {Category} from "../entity/category";

@Component({
  moduleId: module.id,
  selector: 'blog-menu',
  templateUrl: 'template/menu.component.html',
  styleUrls: ['css/menu.component.css']
})
export class MenuComponent implements OnInit {
	@Input() type: number;
	@Input() categories: Category[];
	menus: Menu[];

	ngOnInit(): void {
		if(this.type == 0) {
			this.menus = [];
			this.categories.forEach((value) => {
        this.menus.push({router:'', name:value.name, category:value.id})
      })
		} else if(this.type == 1) {
			this.menus = [
				{router:'/about', name:'个人日记', category:0},
				{router:'/about', name:'学习笔记', category:0}
			]
		} else if(this.type == 2) {
			this.menus = [
				{router:'/about', name:'个人简介', category:0},
				{router:'/about', name:'个人相册', category:0}
			]
		}
	}
}
