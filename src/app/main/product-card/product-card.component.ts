import { Component, OnInit, Input } from "@angular/core";

import { CartService } from "./../../service/cart.service";
import { Product } from "./../../model/product.model";
import { ShoppingCart } from "../../model/shopping-cart";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.css"]
})
export class ProductCardComponent {
  @Input("item") product: any;
  @Input("show-actions") showActions = true;
  @Input("shopping-cart") shoppingCart: ShoppingCart;

  constructor(private cartService: CartService) {}

  addToCart() {
    // console.log(item);
    this.cartService.addToCart(this.product);
  }
}
