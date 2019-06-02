import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { ShoppingCart } from '../../model/shopping-cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart: ShoppingCart;

  constructor(public shoppingCartService: CartService) { }

  async ngOnInit() {
    const cart$ = await this.shoppingCartService.getCart();
    cart$.subscribe(res => {
      this.cart = res;
    });
  }

}
