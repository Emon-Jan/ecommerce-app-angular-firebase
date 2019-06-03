import { Component, OnInit, Input } from "@angular/core";

import { CartService } from "./../../service/cart.service";
import { Product } from "./../../model/product.model";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.css"]
})
export class ProductCardComponent implements OnInit {
  @Input("item") product: Product;
  @Input("show-actions") showActions = true;
  @Input("shopping-cart") shoppingCart;

  constructor(private cartService: CartService) {}

  ngOnInit() {}

  addToCart() {
    // console.log(item);
    this.cartService.addToCart(this.product);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }

  getQuantity() {
    if (!this.shoppingCart) return 0;

    let item = this.shoppingCart.itemsMap[this.product.key];
    return item ? item.quantity : 0;
  }
}
