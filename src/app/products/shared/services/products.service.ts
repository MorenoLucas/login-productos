import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

const PRODUCTS_URL = 'http://localhost:300/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  // CON ESTE SERVICIO OBTENEMOS LOS PRODUCTOS DEL JSON
  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${PRODUCTS_URL}`);
  }
}
