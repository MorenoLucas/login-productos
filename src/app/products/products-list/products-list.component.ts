import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import { Product } from '../shared/models/product';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'ed-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  products: Product[];

  constructor(
    private service: ProductsService,
    private snackBar: MatSnackBar
  ) {}
  // AQUI LOS AGARRAMOS DEL SERVICIO
  ngOnInit() {
    this.loadProducts();
  }
  deleteProduct(product: Product) {
    this.service.delete(product.id).subscribe((response) => {
      console.log('producto borrado', response);
      this.loadProducts();
      this.snackBar.open('Producto Borrado', 'Close', {
        duration: 3000,
      });
    });
  }
  private loadProducts() {
    this.service.getAll().subscribe((data) => {
      console.log('data', data);
      this.products = data;
    });
  }
}
