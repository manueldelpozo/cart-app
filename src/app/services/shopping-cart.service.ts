import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
import { Cart } from '../models/cart';

const CART_KEY = 'cart';

@Injectable()
export class ShoppingCartService {
  private storage: Storage;
  private subscriptionObservable: Observable<Cart>;
  private subscribers: Array<Observer<Cart>> = new Array<Observer<Cart>>();

  public constructor(private storageService: StorageService) {
    this.storage = this.storageService.get();

    this.subscriptionObservable = new Observable<Cart>((observer: Observer<Cart>) => {
      this.subscribers.push(observer);
      observer.next(this.retrieve());
      return () => {
        this.subscribers = this.subscribers.filter((obs) => obs !== observer);
      };
    });
  }

  public get(): Observable<Cart> {
    return this.subscriptionObservable;
  }

  public addItem(product: Product, quantity: number): void {
    const cart = this.retrieve();
    const item = this.findCartItem(product, cart);

    item.quantity += quantity;
    this.updateCart(cart);
  }

  public deleteItem(product: Product): void {
    const cart = this.retrieve();
    const item = this.findCartItem(product, cart);

    item.quantity = 0;
    this.updateCart(cart);
  }

  private retrieve(): Cart {
    const cart = new Cart;
    const storedCart = this.storage.getItem(CART_KEY);
    if (storedCart) {
      cart.updateFrom(JSON.parse(storedCart));
    }

    return cart;
  }

  private findCartItem(product: Product, cart: Cart): CartItem {
    let item = cart.items.find((cartItem) => cartItem.product.id === product.id);
    if (item === undefined) {
      item = new CartItem();
      item.product = product;
      cart.items.push(item);
    }
    return item;
  }

  public updateCart(cart: Cart) {
    cart.items = cart.items.filter((cartItem) => cartItem.quantity > 0);
    this.calculateCart(cart);
    this.save(cart);
    this.dispatch(cart);
  }

  public empty(): void {
    const newCart = new Cart();
    this.save(newCart);
    this.dispatch(newCart);
  }

  private calculateCart(cart: Cart): void {
    cart.itemsTotal = cart.items.reduce((res, item) => res + item.quantity * item.product.price.amount, 0);
  }

  private save(cart: Cart): void {
    this.storage.setItem(CART_KEY, JSON.stringify(cart));
  }

  private dispatch(cart: Cart): void {
    this.subscribers.forEach((sub) => {
      try {
        sub.next(cart);
      } catch (e) {
        console.error(e);
      }
    });
  }
}

