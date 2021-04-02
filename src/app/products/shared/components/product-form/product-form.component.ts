import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'ed-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  // validador de URL
  urlPattern = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/;

  form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    brand: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, this.minPrice(10)]),
    salePrice: new FormControl('', [Validators.required, this.minPrice(10)]),
    thumbImage: new FormControl('', [
      Validators.required,
      Validators.pattern(this.urlPattern),
    ]),
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
  private minPrice(minPrice: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value !== undefined && control.value <= minPrice) {
        return {
          minprice: true,
        };
      } else {
        return null;
      }
    };
  }
}
