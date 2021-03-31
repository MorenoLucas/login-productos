import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

const PRODUCTS_URL = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  // CON ESTE SERVICIO OBTENEMOS LOS PRODUCTOS DEL JSON
  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${PRODUCTS_URL}`);
  }
  // agregamos el producto
  add(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(`${PRODUCTS_URL}`, product);
  }
  get(id: string): Observable<Product> {
    // product/id , accedemos a el
    return this.httpClient.get<Product>(`${PRODUCTS_URL}/${id}`);
  }
}
