import { Component, OnInit, OnDestroy } from "@angular/core";

import { Order } from "../../model/order";

import { OrderService } from "../../service/order.service";
import { AuthService } from "../../service/auth.service";
import { Subscription } from "rxjs";
import { ShoppingCart } from "../../model/shopping-cart";
import { CartService } from "../../service/cart.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-check-out",
  templateUrl: "./check-out.component.html",
  styleUrls: ["./check-out.component.css"]
})
export class CheckOutComponent implements OnInit, OnDestroy {
  shippingInfo: any = {};
  shoppingCart: ShoppingCart;
  userId: string;
  cartSubscription: Subscription;
  userSubscribtion: Subscription;

  constructor(
    private orderService: OrderService,
    private authService: AuthService,
    private shoppingCartService: CartService,
    private router: Router
  ) {}

  async ngOnInit() {
    const cart = await this.shoppingCartService.getCart();
    this.cartSubscription = cart.subscribe(res => (this.shoppingCart = res));
    this.userSubscribtion = this.authService.user$.subscribe(
      res => (this.userId = res.uid)
    );
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
    this.userSubscribtion.unsubscribe();
  }

  async checkOut() {
    const order = new Order(this.userId, this.shippingInfo, this.shoppingCart);
    const orderRes = await this.orderService.storeOrder(order);
    this.router.navigate(["/order-success", orderRes.key]);
  }
}
