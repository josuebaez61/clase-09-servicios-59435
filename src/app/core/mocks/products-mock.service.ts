import { Product } from '../services/products.service';

export class ProductsMockService {
  getProducts(): Product[] {
    return [
      {
        id: 1,
        name: 'Producto falso 123',
      },
      {
        id: 2,
        name: 'Producto de pruebas',
      },
    ];
  }
}
