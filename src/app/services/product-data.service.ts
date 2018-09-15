import { Injectable } from '@angular/core';

@Injectable()
export class ProductDataService {

  constructor() { }

  getAll() {
    return require('../../stubs/products.json');
  }

}
