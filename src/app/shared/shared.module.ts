import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule, MatChipsModule } from "@angular/material";

import { ProductCardComponent } from "./components/product-card/product-card.component";
import { ProductQuantityComponent } from "./components/product-quantity/product-quantity.component";
import { AuthGuard } from "./service/auth-guard.service";
import { AuthService } from "./service/auth.service";
import { CartService } from "./service/cart.service";
import { CategoryService } from "./service/category.service";
import { OrderService } from "./service/order.service";
import { ProductService } from "./service/product.service";
import { UserService } from "./service/user.service";

@NgModule({
  imports: [CommonModule, MatCardModule, MatChipsModule],
  declarations: [ProductCardComponent, ProductQuantityComponent],
  exports: [ProductCardComponent, ProductQuantityComponent],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService,
    CartService,
    OrderService
  ]
})
export class SharedModule {}
