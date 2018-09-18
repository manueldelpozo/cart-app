import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})

export class CartItemComponent implements OnInit {
  @Input() cartItemInput: CartItem[];
  public cartItem: CartItem;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.cartItem = this.cartItemInput[0];
  }

  public increaseQuantity() {
    this.shoppingCartService.addItem(this.cartItem.product, 1);
  }

  public decreaseQuantity() {
    this.shoppingCartService.addItem(this.cartItem.product, -1);
  }

  public deleteItem() {
    this.shoppingCartService.deleteItem(this.cartItem.product);
  }
}
