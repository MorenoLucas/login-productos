import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import { Product } from '../shared/models/product';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogModel } from 'src/app/shared/models/confirm-dialog-model';

@Component({
  selector: 'ed-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  products: Product[];

  constructor(
    private service: ProductsService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}
  // AQUI LOS AGARRAMOS DEL SERVICIO
  ngOnInit() {
    this.loadProducts();
  }
  deleteProduct(product: Product) {
    // recibe el dialogo el componente dialogo y le especificamos titulo y mensaje
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '600px',
      data: <ConfirmDialogModel>{
        title: 'Borrar Producto',
        message: 'Estas seguro de querer borrar el producto?',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.sentDeleterequest(product);
      }
    });
  }
  private loadProducts() {
    this.service.getAll().subscribe((data) => {
      console.log('data', data);
      this.products = data;
    });
  }
  private sentDeleterequest(product: Product) {
    this.service.delete(product.id).subscribe((response) => {
      console.log('producto borrado', response);
      this.loadProducts();
      this.snackBar.open('Producto Borrado', 'Close', {
        duration: 3000,
      });
    });
  }
}
