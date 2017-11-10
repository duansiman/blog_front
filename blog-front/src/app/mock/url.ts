
import {environment} from "../../environments/environment";

const URL_BASE = environment.url;

export const URL_ARTICLE_HOME = URL_BASE + '/blog/api/json/article/list.do';
export const URL_ARTICLE_RANKING = URL_BASE + '/blog/api/json/article/click/list.do';
export const URL_ARTICLE_TOP = URL_BASE + '/blog/api/json/article/top/list.do';
