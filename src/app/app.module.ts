import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MY_URL_PROVIDER } from './core/providers';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    // ProductsService,
    // {
    //   // Cuando proveas:
    //   provide: ProductsService,
    //   // En realidad usa esta clase:
    //   useClass: ProductsMockService,
    // },
    // {
    //   provide: ProductsService,
    //   useFactory: () => {
    //     const isDev = false;
    //     if (isDev) {
    //       return new ProductsMockService();
    //     }
    //     return new ProductsService();
    //   },
    // },
    MY_URL_PROVIDER,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
