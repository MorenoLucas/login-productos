import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'ed-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    brand: new FormControl(''),
    price: new FormControl(''),
    salePrice: new FormControl(''),
    thumbImage: new FormControl(''),
  });

  constructor(private service: ProductsService, private route: Router) {}

  ngOnInit(): void {}
  submit() {
    if (this.form.valid) {
      const product = this.form.value;
      // agregamos el objeto product
      console.log('guardado', product);
      this.service.add(product).subscribe((result) => {
        console.log('el producto a sido agregado');
      });
    } else {
      console.error('formulario invalido');
    }
  }
  cancel() {
    this.route.navigate(['']);
  }
}
