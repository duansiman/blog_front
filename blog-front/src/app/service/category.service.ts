import { Injectable } from '@angular/core'

import {Category} from "../entity/category";
import { CATEGORYS } from '../mock/mock-category';

import { Headers, Http, Response,RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoryService {

	private menusUrl = 'http://107.174.40.132/Blog/api/json/category/query.do';  // URL to web api

	constructor(private http: Http) {}

	getMenusByHttp(): Promise<Response> {
		return this.http.get(this.menusUrl)
							.toPromise();
	}

	getCategory():Category[]{
    return CATEGORYS;
  }



}
