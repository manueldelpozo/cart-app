import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../../services/product-data.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  privateproductInput: Product;

  constructor(private productDataService: ProductDataService, ) { }

  ngOnInit() {
    this.products = this.productDataService.getAll();
  }

}
