import { Component, Input } from '@angular/core';
import { ShoppingCart } from 'shared/model/shopping-cart';

@Component({
  selector: "app-shoppingcart-detail",
  templateUrl: "./shoppingcart-detail.component.html",
  styleUrls: ["./shoppingcart-detail.component.css"]
})
export class ShoppingcartDetailComponent {
  @Input("shopping-cart") shoppingCart: ShoppingCart;

  constructor() { }

}
