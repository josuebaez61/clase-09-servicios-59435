import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
}

const MY_PRODUCTS_DB = [
  {
    id: 1,
    name: 'PS5',
  },
  {
    id: 2,
    name: 'PC Gamer',
  },
];

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor() {}

  getProducts(): Product[] {
    return MY_PRODUCTS_DB;
  }

  getCounter(): Observable<number> {
    return new Observable<number>((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next(4);
      observer.complete();
      observer.next(5);
      observer.next(6);
      observer.next(7);
      observer.next(8);
      observer.next(9);
      observer.next(10);
      // observer.error('Ocurrio un error!');
    });
  }

  getPromise(): Promise<number> {
    return new Promise((resolve, reject) => {
      resolve(1);
      resolve(2);
      resolve(2);
      resolve(2);
      resolve(2);
    });
  }
}
