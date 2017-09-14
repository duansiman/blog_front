import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule, JsonpModule}    from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent}     from '../component/app.component';
import {HeaderComponent}  from '../component/header.component';
import {FooterComponent}  from '../component/footer.component';
import {BannerComponent}  from '../component/banner.component';
import {HomeComponent}     from '../component/home.component';
import {MessageComponent}  from '../component/message.component';
import {AboutComponent}  from '../component/about.component';
import {MenuComponent}  from '../component/menu.component';


import {CategoryService}      from '../service/category.service';

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
    BannerComponent,
    HomeComponent,
    MessageComponent,
    AboutComponent,
    MenuComponent
  ],

  providers: [
    CategoryService
  ],

  bootstrap: [AppComponent]
})

export class AppModule {
}
