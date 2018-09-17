import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Cart } from '../../models/cart';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, OnDestroy {
  public isOpen = false;
  public cart: Observable<Cart>;
  public cartUpdated: Cart;
  public itemCount: number;

  private cartSubscription: Subscription;

  public constructor(private shoppingCartService: ShoppingCartService) {
    /* console.log(this.cart);
    this.isOpen = true; */
  }

  public emptyCart(): void {
    this.shoppingCartService.empty();
  }

  public ngOnInit(): void {
    this.cart = this.shoppingCartService.get();
    this.cartSubscription = this.cart.subscribe(cart => {
      this.cartUpdated = cart;
      this.itemCount = cart.items.map(x => x.quantity).reduce((p, n) => p + n, 0);
    });
  }

  public ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  openPanel() {
    //
  }

}
