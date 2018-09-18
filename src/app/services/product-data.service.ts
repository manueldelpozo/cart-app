import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductDataService {
  constructor(private http: HttpClient) { }

  public all() {
    return this.http.get<any>('/assets/products.json').map(res => res.data);
  }
}
