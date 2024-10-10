import { Component, Inject, OnInit } from '@angular/core';
import { Product, ProductsService } from './core/services/products.service';
import { MY_URL } from './core/injection-tokens';
import { AlertService } from './core/services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'clase-09-servicios';
  products: Product[] = [];
  mostrarHome = true;

  constructor(
    // private _products: ProductsService
    private productsService: ProductsService,
    private alertService: AlertService,
    @Inject(MY_URL) public url: string
  ) {}

  ngOnInit(): void {
    this.alertService.subscribeToAlerts();
    // this.products = this.productsService.getProducts();
    // this.subscribeToCounter();
    // this.getPromise();
    // this.subscribeToGetNumber();
  }

  sendShowTitle(): void {
    this.alertService.showTitle();
  }

  subscribeToGetNumber(): void {
    this.productsService.getNumbers().subscribe({
      next: (v) => console.log(v),
      complete: () => console.log('El observable se completo!'),
    });
  }

  getPromise(): void {
    this.productsService
      .getPromise()
      // Equivale al next
      .then((value) => console.log('PROMESA VALOR:', value))
      // Equivale al error
      .catch((err) => alert(err))
      // Equivale al complete
      .finally(() => console.log('La promise se finalizo'));
  }

  subscribeToCounter(): void {
    this.productsService.getCounter().subscribe({
      // Next: es cuando el observable emite un nuevo valor
      next: (val) => {
        console.log('RECIBIMOS: ', val);
      },
      // Error: es cuando el observable emite un error
      error: (error) => {
        // alert(error);
      },
      // Complete: es cuando el observable deja de emitir valores
      complete: () => {
        console.log('Este observable se completo');
      },
    });
  }
}
