import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import {
  AdminOrdersComponent,
  DialogOverviewAdminComponent
} from "./components/admin-orders/admin-orders.component";
import { AdminProductsComponent } from "./components/admin-products/admin-products.component";
import { ProductFormComponent } from "./components/admin-products/product-form/product-form.component";
import {
  MatDividerModule
} from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule, } from "@angular/material/sort";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule, } from "@angular/material/dialog";
import { MatIconModule, } from "@angular/material/icon";
import { MatCardModule, } from "@angular/material/card";
import { MatChipsModule, } from "@angular/material/chips";
import { MatInputModule } from "@angular/material/input";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "shared/service/auth-guard.service";
import { AdminGuard } from "./services/admin-guard.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
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
export class AdminModule { }
