import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "shared/service/auth-guard.service";
import { SharedModule } from "shared/shared.module";

import { CheckOutComponent } from "./components/check-out/check-out.component";
import {
  DialogOverviewComponent,
  MyOrdersComponent
} from "./components/my-orders/my-orders.component";
import { OrderSuccessComponent } from "./components/order-success/order-success.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { ShoppingcartDetailComponent } from "./components/shoppingcart-detail/shoppingcart-detail.component";

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: "shopping-cart", component: ShoppingCartComponent },
      {
        path: "myorders",
        component: MyOrdersComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "check-out",
        component: CheckOutComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "order-success/:id",
        component: OrderSuccessComponent,
        canActivate: [AuthGuard]
      }
    ])
  ],
  declarations: [
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ShoppingcartDetailComponent,
    DialogOverviewComponent
  ],
  entryComponents: [DialogOverviewComponent]
})
export class ShoppingModule {}
