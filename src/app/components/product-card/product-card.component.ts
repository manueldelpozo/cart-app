import { Component, OnInit, Input } from '@angular/core';
import { ProductDataService } from '../../services/product-data.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() productInput: Product[];
  public product: Product;
  public isActive = false;

  constructor(private productDataService: ProductDataService) { }

  ngOnInit() {
    this.product = this.productInput[0];
  }

  private moveToCart() {
    // this.productDataService.currentCart.subscribe(product => this.product = product );
  }

}
