import { Product } from "./product.model";

export class ShoppingCartItem {
  title: string;
  imageUrl: string;
  price: number;
  quantity: number;
  key: string;

  // constructor(public product: Product, public quantity: number) {}

  get totalPrice() {
    return this.price * this.quantity;
  }
}
