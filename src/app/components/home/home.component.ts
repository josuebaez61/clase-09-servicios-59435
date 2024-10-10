import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import {
  concatMap,
  filter,
  first,
  forkJoin,
  map,
  skip,
  Subscription,
  take,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnDestroy, OnInit {
  intervalSubscription?: Subscription;

  isLoading = false;
  error = false;

  sellers: string[] = [];
  products: string[] = [];

  constructor(private productsService: ProductsService) {
    // this.subscribeToInterval();
  }
  ngOnInit(): void {
    this.loadProductsAndSellers();
    // throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    this.intervalSubscription?.unsubscribe();
  }

  loadProductsAndSellers(): void {
    this.isLoading = true;

    forkJoin([
      this.productsService.getProducts(),
      this.productsService.getSellers(),
    ]).subscribe({
      next: (v) => {
        console.log('FORKJOIN: ', v);

        this.products = v[0];
        this.sellers = v[1];
      },
      error: (err) => {
        this.isLoading = false;
        this.error = true;
      },
      complete: () => (this.isLoading = false),
    });

    // this.productsService.getProducts().subscribe({
    //   next: (products) => (this.products = products),
    //   complete: () => (this.isLoading = false),
    // });
    // this.productsService.getSellers().subscribe({
    //   next: (sellers) => (this.sellers = sellers),
    //   complete: () => (this.isLoading = false),
    // });
  }

  loadProduct(): void {
    this.productsService
      .getId()
      .pipe(concatMap((id) => this.productsService.getProductById(id)))
      .subscribe({
        next: (product) => console.log(product),
      });
  }

  subscribeToInterval(): void {
    this.intervalSubscription = this.productsService.getInterval().subscribe({
      next: (v) => console.log(v),
      complete: () => console.log('Se finalizo!'),
    });
  }
}
