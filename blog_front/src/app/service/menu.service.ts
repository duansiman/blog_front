import { Injectable } from '@angular/core'

import { Menu, MENUS } from './../entity/menu';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MenuService {

	//memory api/menus
	private menusUrl = 'http://localhost:8080/api/json/category/query.do';  // URL to web api

	constructor(private http: Http) {}

    getMenus(): Menu[] {
      return MENUS;
    }

    getMenusByHttp(): Promise<Menu[]> {
    return this.http.get(this.menusUrl)
               .toPromise()
               .then(response => {
               		console.log(response);
               		response.json().data as Menu[];
               	})
               .catch(this.handleError);
	  }

	  private handleError(error: any): Promise<any> {
	    console.error('An error occurred', error); // for demo purposes only
	    return Promise.reject(error.message || error);
	  }

}
