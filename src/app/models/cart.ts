import { CartItem } from './cart-item';

export class Cart {
  public items: CartItem[] = new Array<CartItem>();
  public itemsTotal = 0;
  public currency = 'EUR';

  public updateFrom(src: Cart) {
    this.items = src.items;
    this.itemsTotal = src.itemsTotal;
  }
}
