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

  async clearItems() {
    const cartId = await this.getOrCreateId();
    this.afdb.object("/shopping-carts/" + cartId + "/items").remove();
  }

  private async updateCart(product, change: number) {
    const cartId = await this.getOrCreateId();
    const item = this.getItem(cartId, product.key);
    item
      .valueChanges()
      .take(1)
      .subscribe((resItem: Product) => {
        if (resItem) {
          const quantity = (resItem.quantity || 0) + change;
          quantity ? item.update({ quantity: quantity }) : item.remove();
        } else {
          item.set({
            title: product.payload.val().title,
            imageUrl: product.payload.val().imageUrl,
            price: product.payload.val().price,
            quantity: 1
          });
        }
      });
  }
}
