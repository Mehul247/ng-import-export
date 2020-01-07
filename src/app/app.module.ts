import { SharedModuleModule } from './shared-module/shared-module.module';
//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CategoryComponent } from './category/category.component';
import { CategoryModule } from './category/category.module';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    AppRoutingModule,
    CategoryModule,
    SharedModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
