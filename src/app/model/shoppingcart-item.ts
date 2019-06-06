import { Product } from "./product.model";

export class ShoppingCartItem {
  title: string;
  imageUrl: string;
  price: number;
  quantity: number;
  key: string;

  constructor(attr?: Partial<ShoppingCartItem>) {
    // passing one object attribute to other using constructor
    Object.assign(this, attr);
  }

  get totalPrice() {
    return this.price * this.quantity;
  }
}
