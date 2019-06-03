import { ShoppingCartItem } from "./shoppingcart-item";

export class ShoppingCart {
  items: ShoppingCartItem[] = [];

  constructor(public itemsMap: {[productId: string]: ShoppingCartItem}) {
    for (const productId in itemsMap){
      let item = itemsMap[productId];
      if (item.quantity !== 0) {
        this.items.push(new ShoppingCartItem(item.product, item.quantity));
      }
    }
  }

  get totalItemsPrice(){
    let sum = 0;
    for (const productId in this.items)
      sum += this.items[productId].totalPrice;
    return sum;
  }

  get totalItemsCount() {
    let itemCount = 0;
    for (const prodId in this.itemsMap)
      itemCount += this.itemsMap[prodId].quantity;
    return itemCount;
  }
}


