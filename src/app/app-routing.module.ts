import { MyOrdersComponent } from "./main/my-orders/my-orders.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./main/home/home.component";
import { ProductsComponent } from "./main/products/products.component";
import { OrderSuccessComponent } from "./main/order-success/order-success.component";
import { CheckOutComponent } from "./main/check-out/check-out.component";
import { ShoppingCartComponent } from "./main/shopping-cart/shopping-cart.component";

import { AdminOrdersComponent } from "./admin/admin-orders/admin-orders.component";
import { AdminProductsComponent } from "./admin/admin-products/admin-products.component";

import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "products", component: ProductsComponent },
  { path: "order-success", component: OrderSuccessComponent },
  { path: "shopping-cart", component: ShoppingCartComponent },
  { path: "check-out", component: CheckOutComponent },
  { path: "myorders", component: MyOrdersComponent },
  { path: "admin-products", component: AdminProductsComponent },
  { path: "admin-orders", component: AdminOrdersComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
