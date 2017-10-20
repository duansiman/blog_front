import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule, JsonpModule}    from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent}     from '../component/app.component';
import {HeaderComponent}  from '../component/header.component';
import {FooterComponent}  from '../component/footer.component';
import {HomeComponent}     from '../component/home.component';
import {MessageComponent}  from '../component/message.component';
import {AboutComponent}  from '../component/about.component';
import {MenuComponent}  from '../component/menu.component';
import {ContactComponent}  from '../component/contact.component';
import {ArticleRecommendComponent}  from '../component/article-recommend.component';
import {ArticleRankingsComponent}  from '../component/article-rankings.component';
import {AdComponent}  from '../component/ad.component';
import {ArticleListComponent}  from '../component/article-list.component';
import {ArticleContentComponent}  from '../component/article-content.component';


import {CategoryService}      from '../service/category.service';
import {ArticleService} from "../service/article.service";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],

  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MessageComponent,
    AboutComponent,
    MenuComponent,
    ContactComponent,
    ArticleRecommendComponent,
    ArticleRankingsComponent,
    AdComponent,
    ArticleListComponent,
    ArticleContentComponent
  ],

  providers: [
    CategoryService, ArticleService
  ],

  bootstrap: [AppComponent]
})

export class AppModule {
}
