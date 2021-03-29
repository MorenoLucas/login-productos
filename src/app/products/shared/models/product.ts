import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';

export interface Product {
  id: string;
  tittle: string;
  url: string;
  salePrice: number;
  price: number;
  brand: string;
  thumbImage: string;
}
