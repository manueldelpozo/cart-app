import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule, MatIconModule, MatProgressSpinnerModule, MatSelectModule, MatExpansionModule, MatButtonModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

import { ProductDataService } from './services/product-data.service';
import { LocalStorageService, StorageService } from './services/storage.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCardComponent,
    CartListComponent,
    CartItemComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule, MatIconModule, MatProgressSpinnerModule, MatSelectModule, MatExpansionModule, MatButtonModule
  ],
  providers: [
    ProductDataService,
    ShoppingCartService,
    { provide: StorageService, useClass: LocalStorageService },
    {
      deps: [StorageService, ProductDataService],
      provide: ShoppingCartService,
      useClass: ShoppingCartService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
