import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }     from '../component/home.component';
import { MessageComponent }  from '../component/message.component';
import { AboutComponent }  from '../component/about.component';
import {ArticleContentComponent} from "../component/article-content.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'article-content/:desc',  component: ArticleContentComponent },
  { path: 'message', component: MessageComponent },
  { path: 'about',     component: AboutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {enableTracing: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
