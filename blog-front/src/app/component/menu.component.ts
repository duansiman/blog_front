import { Component, Input, OnInit } from '@angular/core';

import { Menu } 			from './../entity/menu';

@Component({
  moduleId: module.id,
  selector: 'blog-menu',
  templateUrl: 'template/menu.component.html',
  styleUrls: ['css/menu.component.css']
})
export class MenuComponent implements OnInit {
	@Input() type: number;
	menus: Menu[];

	ngOnInit(): void {
		if(this.type == 0) {
			this.menus = [
				{router:'', name:'Linux'}
			]
		} else if(this.type == 1) {
			this.menus = [
				{router:'/about', name:'个人日记'},
				{router:'/about', name:'学习笔记'}
			]
		} else if(this.type == 2) {
			this.menus = [
				{router:'/about', name:'个人简介'},
				{router:'/about', name:'个人相册'}
			]
		}
	}
}
