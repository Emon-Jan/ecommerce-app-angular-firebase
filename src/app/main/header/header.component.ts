import { ShoppingCart } from "./../../model/shopping-cart";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { User } from "./../../model/user.model";
import { AuthService } from "./../../service/auth.service";
import { CartService } from "./../../service/cart.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  guestUser: User;
  authSubscription: Subscription;
  cart: ShoppingCart;
  cartSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private shoppingCartService: CartService
  ) {
    this.authSubscription = this.authService.eUser.subscribe(
      user => (this.guestUser = user)
    );
    this.cartSubscription = this.shoppingCartService.cartItemsCountCahnged.subscribe(
      res => {
        this.cart = res;
      }
    );
  }

  ngOnInit() {}

  onLogout() {
    this.authService.logOut();
    this.router.navigate(["/home"]);
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
    this.cartSubscription.unsubscribe();
  }
}
