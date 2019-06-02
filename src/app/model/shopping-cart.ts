import { ShoppingCartItem } from "./shoppingcart-item";

export class ShoppingCart {
  constructor(public items: ShoppingCartItem[]) {}

  get productIds() {
    return Object.keys(this.items);
  }

  get totalItemsCount() {
    let itemCount = 0;
    for (const prodId in this.items)
      itemCount += this.items[prodId].quantity;
    return itemCount;
  }
}


