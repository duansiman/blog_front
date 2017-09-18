import { Injectable } from '@angular/core'


import { Headers, Http, Response,RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {ArticleDesc} from "../entity/article-desc";
import {ARTICLELISTS} from "../mock/mock-article-list"
import {RANKINGLISTS} from "../mock/mock-ranking-list";
import {RECOMMENDLISTS} from "../mock/mock-recommend-list";

@Injectable()
export class ArticleService {

	private menusUrl = 'http://107.174.40.132/Blog/api/json/category/query.do';  // URL to web api

	constructor(private http: Http) {}

	getMenusByHttp(): Promise<Response> {
		return this.http.get(this.menusUrl)
							.toPromise();
	}

	getArticlesByHome():ArticleDesc[]{
    return ARTICLELISTS;
  }

  getArticlesByRanking():ArticleDesc[]{
    return RANKINGLISTS;
  }

  getArticlesByRecommend():ArticleDesc[]{
    return RECOMMENDLISTS;
  }



}
