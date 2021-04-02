import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../models/product';
import { catchError } from 'rxjs/operators';

const PRODUCTS_URL = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  // CON ESTE SERVICIO OBTENEMOS LOS PRODUCTOS DEL JSON
  getAll(): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>(`${PRODUCTS_URL}`)
      .pipe(catchError(this.handleError));
  }
  // agregamos el producto
  add(product: Product): Observable<Product> {
    return this.httpClient
      .post<Product>(`${PRODUCTS_URL}`, product)
      .pipe(catchError(this.handleError));
  }
  get(id: string): Observable<Product> {
    // product/id , accedemos a el
    return this.httpClient
      .get<Product>(`${PRODUCTS_URL}/${id}`)
      .pipe(catchError(this.handleError));
  }
  update(product: Product): Observable<Product> {
    // actualiza el product, ademas de enviarle el id del mismo
    return this.httpClient
      .put<Product>(`${PRODUCTS_URL}/${product.id}`, product)
      .pipe(catchError(this.handleError));
  }
  delete(id: string): Observable<Product> {
    return this.httpClient
      .delete<Product>(`${PRODUCTS_URL}/${id}`)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('Cliente error', error.error.message);
    } else {
      // error en el lado del servidor
      console.log('Errpr status:', error.status);
      console.log('Error:', error.error);
    }
    return throwError('Cannot perform the request, please try later');
  }
}
