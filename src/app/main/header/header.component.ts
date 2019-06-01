import { ShoppingCart } from "./../../model/shopping-cart";
import { ShoppingCartItem } from "./../../model/shoppingcart-item";
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

  constructor(
    private authService: AuthService,
    private router: Router,
    private shoppingCartService: CartService
  ) {}

  async ngOnInit() {
    this.authSubscription = this.authService.eUser.subscribe(
      user => (this.guestUser = user)
    );
    const cart = await this.shoppingCartService.getCart();
    cart.subscribe((cartRes: ShoppingCart) => {
      this.itemCount = 0;
      // tslint:disable-next-line: forin
      for (const prodId in cartRes.items) {
        this.itemCount += cartRes.items[prodId].quantity;
      }
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
