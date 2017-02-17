import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './../memory/in-memory-data.service';

import { AppComponent }     from './../component/app.component';
import { HeaderComponent }  from './../component/header.component';

import { MenuService }      from './../service/menu.service';

@NgModule({
  imports: [ 
  	BrowserModule,
    FormsModule,
    HttpModule,
  	InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],

  declarations: [
   	AppComponent ,
   	HeaderComponent
  ],

  providers: [
  	MenuService
  ],

  bootstrap: [ AppComponent ]
})

export class AppModule { }
