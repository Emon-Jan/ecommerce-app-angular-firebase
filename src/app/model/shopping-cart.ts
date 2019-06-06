import { ShoppingCartItem } from "./shoppingcart-item";
import { Product } from "./product.model";

export class ShoppingCart {
  items: ShoppingCartItem[] = [];

  constructor(public itemsMap: { [productId: string]: ShoppingCartItem }) {
    this.itemsMap = this.itemsMap || {};
    for (const productId in itemsMap) {
      let item = this.itemsMap[productId];
      let x = new ShoppingCartItem();
      Object.assign(x, item);
      x.key = productId;
      if (item.quantity !== 0) {
        this.items.push(x);
      }
    }
  }

  getQuantity(product: Product) {
    const item = this.itemsMap[product.key];
    return item ? item.quantity : 0;
  }

  get totalItemsPrice() {
    let sum = 0;
    for (const productId in this.items) sum += this.items[productId].totalPrice;
    return sum;
  }

  get totalItemsCount(): number {
    let itemCount = 0;
    for (const prodId in this.itemsMap)
      itemCount += this.itemsMap[prodId].quantity;
    return itemCount;
  }
}
