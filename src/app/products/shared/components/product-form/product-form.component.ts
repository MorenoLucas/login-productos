import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'ed-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    brand: new FormControl(''),
    price: new FormControl(''),
    salePrice: new FormControl(''),
    thumbImage: new FormControl(''),
  });
  @Input() title: string;
  @Input() labelSubmit: string;
  // cuando implementamos model, se le envia un modelo de datos que contiene product
  @Input() set model(m: Product) {
    if (!m) {
      return;
    } else {
      console.log('set model', m);
      // PATCHVALUE: puede obtener mas atributos de los que espera.
      this.form.patchValue(m);
    }
  }

  @Output() submit: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    if (this.form.valid) {
      // ENVIAMOS EL MODELO DE DATOS: PRODUCT
      this.submit.emit(this.form.value);
    } else {
      console.error('Formulario invalido');
    }
  }
  onCancel() {
    this.cancel.emit();
  }
}
