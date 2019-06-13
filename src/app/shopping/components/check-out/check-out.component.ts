import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Order } from "shared/model/order";
import { ShoppingCart } from "shared/model/shopping-cart";
import { AuthService } from "shared/service/auth.service";
import { CartService } from "shared/service/cart.service";
import { OrderService } from "shared/service/order.service";

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
