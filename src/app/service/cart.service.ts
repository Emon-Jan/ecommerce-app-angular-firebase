import { Injectable } from "@angular/core";

import "rxjs/add/operator/take";
import { AngularFireDatabase } from "angularfire2/database";

import { Product } from "./../model/product.model";

@Injectable()
export class CartService {
  constructor(private afdb: AngularFireDatabase) {}

  private create() {
    return this.afdb.list("shopping-carts").push({
      cartCreated: new Date().getTime()
    });
  }

  async getCart() {
    let cartId = await this.getOrCreateId();
    return this.afdb.object("/shopping-carts/" + cartId).valueChanges();
  }

  private getItem(cartId: string, productId: string) {
    return this.afdb.object(
      "/shopping-carts/" + cartId + "/items/" + productId
    );
  }

  private async getOrCreateId(): Promise<string> {
    let cartId = localStorage.getItem("cartId");
    if (cartId) return cartId;

    let result = await this.create();
    localStorage.setItem("cartId", result.key);
    return result.key;
  }

  addToCart(product) {
    this.updateCart(product, 1);
  }

  removeFromCart(product) {
    this.updateCart(product, -1);
  }

  private async updateCart(product, change: number) {
    let cartId = await this.getOrCreateId();

    let item = this.getItem(cartId, product.key).valueChanges();
    item.take(1).subscribe((res: Product) => {
      if (res) {
        this.getItem(cartId, product.key).update({
          quantity: res.quantity + change
        });
      } else {
        this.getItem(cartId, product.key).set({
          product: product.payload.val(),
          quantity: 1
        });
      }
    });
  }
}
