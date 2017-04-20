import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule, JsonpModule}    from '@angular/http';

import { AppComponent }     from './../component/app.component';
import { HeaderComponent }  from './../component/header.component';
import { BannerComponent }  from './../component/banner.component';
import { HotComponent }  from './../component/hot.component';
import { LabelComponent }  from './../component/label.component';
import { LikeComponent }  from './../component/like.component';
import { ArticleComponent }  from './../component/article.component';

import { MenuService }      from './../service/menu.service';

@NgModule({
  imports: [ 
  	BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],

  declarations: [
   	AppComponent ,
   	HeaderComponent,
       BannerComponent,
       HotComponent,
       LabelComponent,
       LikeComponent,
       ArticleComponent
  ],

  providers: [
  	MenuService
  ],

  bootstrap: [ AppComponent ]
})

export class AppModule { }
