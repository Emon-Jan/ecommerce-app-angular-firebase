import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "shared/service/auth-guard.service";

import {
  AdminOrdersComponent,
  DialogOverviewAdminComponent
} from "./components/admin-orders/admin-orders.component";
import { AdminProductsComponent } from "./components/admin-products/admin-products.component";
import { ProductFormComponent } from "./components/admin-products/product-form/product-form.component";
import { AdminGuard } from "./services/admin-guard.service";
import { SharedModule } from "shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: "admin-products/new",
        component: ProductFormComponent,
        canActivate: [AuthGuard, AdminGuard]
      },
      {
        path: "admin-products/:id",
        component: ProductFormComponent,
        canActivate: [AuthGuard, AdminGuard]
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
    ])
  ],
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
    DialogOverviewAdminComponent
  ],
  entryComponents: [DialogOverviewAdminComponent]
})
export class AdminModule {}
