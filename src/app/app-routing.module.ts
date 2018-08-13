import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./main/home/home.component";
import { ProductsComponent } from "./main/products/products.component";
import { OrderSuccessComponent } from "./main/order-success/order-success.component";
import { CheckOutComponent } from "./main/check-out/check-out.component";
import { ShoppingCartComponent } from "./main/shopping-cart/shopping-cart.component";
import { MyOrdersComponent } from "./main/my-orders/my-orders.component";

import { AdminOrdersComponent } from "./admin/admin-orders/admin-orders.component";
import { AdminProductsComponent } from "./admin/admin-products/admin-products.component";

import { LoginComponent } from "./login/login.component";

import { AdminGuard } from "./service/admin-guard.service";
import { AuthGuard } from "./service/auth-guard.service";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "products", component: ProductsComponent },
  { path: "shopping-cart", component: ShoppingCartComponent },
  { path: "login", component: LoginComponent },
  { path: "myorders", component: MyOrdersComponent, canActivate: [AuthGuard] },
  { path: "check-out", component: CheckOutComponent, canActivate: [AuthGuard] },
  {
    path: "order-success",
    component: OrderSuccessComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "admin-products",
    component: AdminProductsComponent,
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: "admin-orders",
    component: AdminOrdersComponent,
    canActivate: [AuthGuard, AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
