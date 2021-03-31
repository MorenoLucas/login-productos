import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../shared/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'ed-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    brand: new FormControl(''),
    price: new FormControl(''),
    salePrice: new FormControl(''),
    thumbImage: new FormControl(''),
  });
  id: string;
  constructor(
    private route: ActivatedRoute,
    private service: ProductsService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
  // capturamos el ID del producto, haciendo snapshot del servicio ActivatedRoute
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    // accedemos el products/id, enviandole el parametro ID que acabamos de capturar
    this.service.get(this.id).subscribe((product) => {
      console.log('producto', product);
      // agarra los parametros que necesita, sin romper como el setValue
      this.form.patchValue(product);
    });
  }
  submit() {
    if (this.form.valid) {
      const product = this.form.value;
      product.id = this.id;
      console.log('actualizamos', product);
      this.service.update(product).subscribe((result) => {
        console.log('actualizamos', result);
        this.router.navigate(['/product']);
        this.snackBar.open('Producto Actualizado', 'Cerrar', {
          duration: 3000,
        });
      });
    }
  }
  cancel() {
    this.router.navigate(['/product']);
  }
}
