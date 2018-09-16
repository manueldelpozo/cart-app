import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Product } from '../models/product';

@Injectable()
export class ProductDataService {
  private cartSource = new BehaviorSubject('default');
  currentCart = this.cartSource.asObservable();

  constructor() { }

  getAll(): Product[] {
    return require('../../stubs/products.json');
  }

  changeProduct(product: Product) {
    // this.cartSource.next(product);
  }

}
