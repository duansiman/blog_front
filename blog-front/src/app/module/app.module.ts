import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule, JsonpModule}    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }     from './../component/app.component';
import { HeaderComponent }  from './../component/header.component';
import { FooterComponent }  from './../component/footer.component';
import { BannerComponent }  from './../component/banner.component';
import { HotComponent }  from './../component/hot.component';
import { LabelComponent }  from './../component/label.component';
import { LikeComponent }  from './../component/like.component';
import { ArticleComponent }  from './../component/article.component';
import { HomeComponent }     from './../component/home.component';
import { MessageComponent }  from './../component/message.component';
import { AboutComponent }  from './../component/about.component';
import { MenuComponent }  from './../component/menu.component';


import { MenuService }      from './../service/menu.service';

@NgModule({
  imports: [ 
  	BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],

  declarations: [
   	AppComponent ,
   	HeaderComponent,
    FooterComponent,
       BannerComponent,
       HotComponent,
       LabelComponent,
       LikeComponent,
       ArticleComponent,
       HomeComponent,
       MessageComponent,
       AboutComponent,
       MenuComponent
  ],

  providers: [
  	MenuService
  ],

  bootstrap: [ AppComponent ]
})

export class AppModule { }
