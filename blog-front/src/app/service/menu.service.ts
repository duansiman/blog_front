import { Injectable } from '@angular/core'

import { Menu, MENUS } from './../entity/menu';
import { Headers, Jsonp, Response,RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MenuService {

	private menusUrl = 'http://localhost:8080/api/json/category/query.do';  // URL to web api

	constructor(private jsonp: Jsonp) {}

	getMenusByHttp(): Promise<Response> {
		
		var params = new URLSearchParams();
		params.set("callback", "JSONP_CALLBACK");
		return this.jsonp.get(this.menusUrl, {search:params})
							.toPromise();
	}

}
