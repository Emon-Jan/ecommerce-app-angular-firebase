import { ShoppingCart } from "./../../model/shopping-cart";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { User } from "./../../model/user.model";
import { AuthService } from "./../../service/auth.service";
import { CartService } from "./../../service/cart.service";
import { Subscription, Observable } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  guestUser: User;
  authSubscription: Subscription;
  itemCount: number;
  cart: ShoppingCart;

  constructor(
    private authService: AuthService,
    private router: Router,
    private shoppingCartService: CartService
  ) {}

  async ngOnInit() {
    this.authSubscription = this.authService.eUser.subscribe(
      user => (this.guestUser = user)
    );
    const cart$ = await this.shoppingCartService.getCart();
    cart$.subscribe(res => {
      this.cart = res;
    });
  }

  onLogout() {
    this.authService.logOut();
    this.router.navigate(["/home"]);
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
