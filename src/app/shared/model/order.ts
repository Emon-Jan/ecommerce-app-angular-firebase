import { ShoppingCart } from "./shopping-cart";

export class Order {
  dateTime: number;
  items: any[];
  grossPrice: number;

  constructor(
    public userId: string,
    public sippingInfo: any,
    shoppingCart: ShoppingCart
  ) {
    this.dateTime = new Date().getTime();
    this.items = shoppingCart.items.map(res => {
      return {
        product: {
          title: res.title,
          price: res.price,
          imageUrl: res.imageUrl
        },
        quantity: res.quantity,
        totalPrice: res.totalPrice
      };
    });
    this.grossPrice = shoppingCart.totalItemsPrice;
  }
}
