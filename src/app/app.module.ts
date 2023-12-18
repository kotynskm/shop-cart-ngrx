import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';
import { cartReducer } from './state/cart/cart.reducers';
import { catalogReducer } from './state/catalog/catalog.reducers';

@NgModule({
  declarations: [AppComponent, CartComponent, CatalogComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ cart: cartReducer, catalog: catalogReducer }, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
