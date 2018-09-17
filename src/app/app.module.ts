import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule, MatIconModule, MatProgressSpinnerModule, MatSelectModule, MatExpansionModule
} from '@angular/material';


import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

import { SortListDirective } from './directives/sort-list.directive';
import { ProductDataService } from './services/product-data.service';
import { LocalStorageService, StorageService } from './services/storage.service';
import { CachingService } from './services/caching.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { OrderByPipe } from './pipes/order-by.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCardComponent,
    CartListComponent,
    CartItemComponent,
    SortListDirective,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatCardModule, MatIconModule, MatProgressSpinnerModule, MatSelectModule, MatExpansionModule
  ],
  providers: [
    ProductDataService,
    ShoppingCartService,
    CachingService,
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
