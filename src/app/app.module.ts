import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatListModule, MatProgressSpinnerModule } from '@angular/material';


import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { SortListDirective } from './directives/sort-list.directive';
import { ProductDataService } from './services/product-data.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCardComponent,
    CartListComponent,
    CartItemComponent,
    SortListDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule, MatListModule, MatProgressSpinnerModule
  ],
  providers: [ProductDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
