import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { MaterialModule } from '../shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductAddComponent } from './product-add/product-add.component';

@NgModule({
  declarations: [ProductsComponent, ProductsListComponent, ProductAddComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    HttpClientModule,
  ],
})
export class ProductsModule {}
