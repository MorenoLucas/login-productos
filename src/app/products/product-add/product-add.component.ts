import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductsService } from '../shared/services/products.service';
import { Product } from '../shared/models/product';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'ed-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  constructor(
    private service: ProductsService,
    private route: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}
  submit(product: Product) {
    // agregamos el objeto product a la lista de productos
    console.log('guardado', product);
    this.service
      .add(product)
      .pipe(
        catchError((error) => {
          this.snackBar.open(error, null, {
            duration: 3000,
          });
          return EMPTY;
        })
      )
      .subscribe((result) => {
        console.log('el producto a sido agregado');
        this.route.navigate(['']);
        // mensaje de confirmación
        this.snackBar.open('Producto agregado', 'Cerrar', {
          duration: 3000,
        });
      });

    console.error('formulario invalido');
  }
  cancel() {
    this.route.navigate(['']);
  }
}
