import { Injectable } from '@angular/core';
import { delay, interval, Observable, of, throwError } from 'rxjs';

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

  getNumbers(): Observable<number> {
    // return new Observable(subs => subs.next())
    return of(1, 2, 3);
  }

  getId(): Observable<number> {
    return of(1);
  }

  getProducts(): Observable<string[]> {
    return of(['PC Gamer', 'PS5', 'Monitor', 'Mouse']).pipe(delay(1000));
  }

  getSellers(): Observable<string[]> {
    return of(['Jorge', 'Maria', 'Eugenio']).pipe(delay(2000));
    // return throwError(() => 'Ocurrio un error');
  }

  getProductById(id: number): Observable<{ id: number; name: string }> {
    return of({ id: 1, name: 'PC Gamer' });
  }

  getInterval(): Observable<number> {
    return interval(1000);
  }

  // getProducts(): Product[] {
  //   return MY_PRODUCTS_DB;
  // }

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
