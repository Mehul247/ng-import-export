import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { ProductModule } from '../product/product.module';
//import { SharedModuleModule } from '../shared-module/shared-module.module';



@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    //SharedModuleModule,
    ProductModule
  ],
  exports: [
    CategoryComponent
  ]
})
export class CategoryModule { }
