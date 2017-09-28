import { Injectable } from '@angular/core'
import { Headers, Http, Response,RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {ArticleDesc} from "../entity/article-desc";
import {ARTICLELISTS} from "../mock/mock-article-list"
import {RANKINGLISTS} from "../mock/mock-ranking-list";
import {RECOMMENDLISTS} from "../mock/mock-recommend-list";
import {BaseService} from "./base.service";

@Injectable()
export class ArticleService extends BaseService{

	private URL_ARTICLE_HOME = '/blog/api/json/article/home.do';
  private headers = new Headers();

	constructor(private http: Http) {
	  super();
  }

	getArticlesByHome(start, count):Promise<ArticleDesc[]>{
	  return this.http
      .get(this.URL_ARTICLE_HOME, {
	      params:{
	        "start":start,
          "end":count
        }
      })
      .toPromise()
      .then(response => response.json().data as ArticleDesc[])
      .catch(super.handleError);
    //return ARTICLELISTS;
  }

  getArticlesByRanking():ArticleDesc[]{
    return RANKINGLISTS;
  }

  getArticlesByRecommend():ArticleDesc[]{
    return RECOMMENDLISTS;
  }



}
