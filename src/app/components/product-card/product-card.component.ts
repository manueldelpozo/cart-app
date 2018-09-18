import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
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

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.product = this.productInput[0];
  }

  public addProductToCart(): void {
    this.shoppingCartService.addItem(this.product, 1);
  }
}
