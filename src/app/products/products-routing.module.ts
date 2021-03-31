import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
  {
    path: '', // /products
    component: ProductsComponent,
    children: [
      {
        path: '', // /products --> /products/list
        pathMatch: 'full',
        redirectTo: 'list',
      },
      {
        path: 'list', // /products/list
        component: ProductsListComponent,
      },
      {
        path: 'add',
        component: ProductAddComponent,
      },
      // tenemos un parametro ID dinamico
      {
        path: 'edit/:id',
        component: ProductEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
