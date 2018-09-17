import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Product } from './../models/product';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { CachingService } from './caching.service';

@Injectable()
export class ProductDataService {
  private products: Observable<Product[]>;

  constructor(private http: Http, private cachingService: CachingService) {}

  /* public all(): Observable<Product[]> {
    return this.cachingService.cache<Product[]>(() =>
      this.products,
      (val: Observable<Product[]>) => this.products = val,
      () => this.http
        .get('./assets/products.json')
        .map((response) => response.json().map((item) => {
          const model = new Product();
          model.updateFrom(item);
          return model;
      }))
    );
  } */

  all(): Observable<Product[]> {
    return require('../../stubs/products.json');
  }

}
