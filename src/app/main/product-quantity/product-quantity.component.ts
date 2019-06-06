import { Component, Input } from "@angular/core";
import { CartService } from "../../service/cart.service";
import { ShoppingCart } from "../../model/shopping-cart";

@Component({
  selector: "app-product-quantity",
  templateUrl: "./product-quantity.component.html",
  styleUrls: ["./product-quantity.component.css"]
})
export class ProductQuantityComponent {
  @Input("product") product: any;
  @Input("shopping-cart") shoppingCart: ShoppingCart;

  constructor(private cartService: CartService) {}

  addToCart() {
    // console.log(item);
    this.cartService.addToCart(this.product);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }
}
