import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import { Product } from '../shared/models/product';

@Component({
  selector: 'ed-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  products: Product[];

  constructor(private service: ProductsService) {}
  // AQUI LOS AGARRAMOS DEL SERVICIO
  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      console.log('data', data);
      this.products = data;
    });
  }
}
