import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [ProductComponent],
  imports: [
    SharedModuleModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }
