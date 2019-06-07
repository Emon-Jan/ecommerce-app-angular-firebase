import { Component, OnInit, Input } from "@angular/core";
import { ShoppingCart } from "../../model/shopping-cart";

@Component({
  selector: "app-shoppingcart-detail",
  templateUrl: "./shoppingcart-detail.component.html",
  styleUrls: ["./shoppingcart-detail.component.css"]
})
export class ShoppingcartDetailComponent implements OnInit {
  @Input("shopping-cart") shoppingCart: ShoppingCart;

  constructor() {}

  ngOnInit() {
    // console.log(this.shoppingCart.totalItemsCount);
  }
}
