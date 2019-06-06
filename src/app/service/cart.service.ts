import { Injectable } from "@angular/core";

import { AngularFireDatabase } from "angularfire2/database";

import { Product } from "./../model/product.model";
import { ShoppingCart } from "../model/shopping-cart";

import { Observable } from "rxjs";
import "rxjs/add/operator/take";
import "rxjs/add/operator/map";

@Injectable()
export class CartService {
  constructor(private afdb: AngularFireDatabase) {}

  private create() {
    return this.afdb.list("shopping-carts").push({
      cartCreated: new Date().getTime()
    });
  }

  async getCart(): Promise<Observable<ShoppingCart>> {
    const cartId = await this.getOrCreateId();
    return this.afdb
      .object("/shopping-carts/" + cartId)
      .valueChanges()
      .map((x: any) => {
        if (x === null) {
          return new ShoppingCart({});
        } else return new ShoppingCart(x.items);
      });
  }

  private getItem(cartId: string, productId: string) {
    return this.afdb.object(
      "/shopping-carts/" + cartId + "/items/" + productId
    );
  }

  private async getOrCreateId(): Promise<string> {
    const cartId = localStorage.getItem("cartId");
    if (cartId) return cartId;

    const result = await this.create();
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
    const cartId = await this.getOrCreateId();
    const item = this.getItem(cartId, product.key).valueChanges();
    item.take(1).subscribe((res: Product) => {
      if (res) {
        this.getItem(cartId, product.key).update({
          quantity: res.quantity + change
        });
      } else {
        this.getItem(cartId, product.key).set({
          title: product.payload.val().title,
          imageUrl: product.payload.val().imageUrl,
          price: product.payload.val().price,
          quantity: 1
        });
      }
    });
  }
}
