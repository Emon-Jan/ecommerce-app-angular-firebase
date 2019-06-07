import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { ShoppingCart } from "../model/shopping-cart";
import { CartService } from "./cart.service";

@Injectable()
export class OrderService {
  constructor(
    private afdb: AngularFireDatabase,
    private shoppingCartService: CartService
  ) {}

  storeOrder(order) {
    const result = this.afdb.list("/orders").push(order);
    this.shoppingCartService.clearItems();
    return result;
  }
}
