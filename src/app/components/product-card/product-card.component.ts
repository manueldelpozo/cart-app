import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() productInput: Product[];
  product: Product;
  isActive = false;

  constructor() { }

  ngOnInit() {
    this.product = this.productInput[0];
    console.log(this.product);
  }

  private moveToCart() {
    // some code
  }

}
