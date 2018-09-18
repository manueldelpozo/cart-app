import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProductDataService } from '../../services/product-data.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  products: Observable<Product[]>;
  privateproductInput: Product;

  constructor(private productDataService: ProductDataService) { }

  ngOnInit() {
    this.productDataService.all().subscribe(
      data => {
        this.products = data;
      },
      err => {
        console.error(err);
      });
  }
}
