import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { CartService } from './cart.service';

@Injectable()
export class OrderService {
  constructor(
    private afdb: AngularFireDatabase,
    private shoppingCartService: CartService
  ) { }

  getOrder() {
    return this.afdb.list("/orders", ref => ref.orderByChild("dateTime"));
  }

  getOrderByUser(userId: string) {
    return this.afdb
      .list("/orders", ref => ref.orderByChild("userId").equalTo(userId))
      .valueChanges();
  }

  getOrderById(orderId: string) {
    return this.afdb.object("/orders/" + orderId).valueChanges();
  }

  storeOrder(order) {
    const result = this.afdb.list("/orders").push(order);
    this.shoppingCartService.clearItems();
    return result;
  }
}
