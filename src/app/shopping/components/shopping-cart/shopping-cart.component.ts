import { Component, OnInit } from "@angular/core";
import { CartService } from "shared/service/cart.service";
import { ShoppingCart } from "shared/model/shopping-cart";
import { Observable } from "rxjs";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.css"]
})
export class ShoppingCartComponent implements OnInit {
  cart$: Observable<ShoppingCart>;

  constructor(public shoppingCartService: CartService) {}

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
  }

  removeCartItems() {
    this.shoppingCartService.clearItems();
  }
}
