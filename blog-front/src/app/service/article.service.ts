import { Injectable } from '@angular/core'
import { Headers, Http, Response,RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {ArticleDesc} from "../entity/article-desc";
import {ARTICLELISTS} from "../mock/mock-article-list"
import {RANKINGLISTS} from "../mock/mock-ranking-list";
import {RECOMMENDLISTS} from "../mock/mock-recommend-list";
import {BaseService} from "./base.service";
import {URL_ARTICLE_HOME, URL_ARTICLE_RANKING, URL_ARTICLE_TOP} from "../mock/url";

@Injectable()
export class ArticleService extends BaseService{

	constructor(private http: Http) {
	  super();
  }

	getArticles(categoryId, start, count):Promise<ArticleDesc[]>{
	  return this.http
      .get(URL_ARTICLE_HOME, {
	      params:{
	        "categoryId":categoryId,
	        "start":start,
          "end":count
        }
      })
      .toPromise()
      .then(response => response.json().data as ArticleDesc[])
      .catch(super.handleError);
  }

  getArticlesByRanking(categoryId, start, count):Promise<ArticleDesc[]>{
    return this.http
      .get(URL_ARTICLE_RANKING, {
        params:{
          "categoryId":categoryId,
          "start":start,
          "end":count
        }
      })
      .toPromise()
      .then(response => response.json().data as ArticleDesc[])
      .catch(super.handleError);
  }

  getArticlesByRecommend(categoryId, start, count):Promise<ArticleDesc[]>{
    return this.http
      .get(URL_ARTICLE_TOP, {
        params:{
          "categoryId":categoryId,
          "start":start,
          "end":count
        }
      })
      .toPromise()
      .then(response => response.json().data as ArticleDesc[])
      .catch(super.handleError);
  }



}
