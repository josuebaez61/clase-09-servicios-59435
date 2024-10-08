import { Injectable } from '@angular/core';

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
}
