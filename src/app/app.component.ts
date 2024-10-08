import { Component, Inject, OnInit } from '@angular/core';
import { Product, ProductsService } from './core/services/products.service';
import { MY_URL } from './core/injection-tokens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'clase-09-servicios';
  products: Product[] = [];

  constructor(
    // private _products: ProductsService
    private productsService: ProductsService,
    @Inject(MY_URL) public url: string
  ) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
}
