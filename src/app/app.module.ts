import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatChipsModule,
  MatListModule,
  MatDividerModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { CustomFormsModule } from "ng2-validation";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { environment } from "./../environments/environment";

import { AuthGuard } from "./service/auth-guard.service";
import { AdminGuard } from "./service/admin-guard.service";
import { AuthService } from "./service/auth.service";
import { UserService } from "./service/user.service";
import { ProductService } from "./service/product.service";
import { CartService } from "./service/cart.service";
import { CategoryService } from "./service/category.service";
import { OrderService } from "./service/order.service";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./main/header/header.component";
import { FooterComponent } from "./main/footer/footer.component";

import { HomeComponent } from "./main/home/home.component";
import { ProductsComponent } from "./main/products/products.component";
import { ProductFormComponent } from "./admin/admin-products/product-form/product-form.component";
import { ShoppingCartComponent } from "./main/shopping-cart/shopping-cart.component";
import { CheckOutComponent } from "./main/check-out/check-out.component";
import { OrderSuccessComponent } from "./main/order-success/order-success.component";
import {
  MyOrdersComponent,
  DialogOverviewComponent
} from "./main/my-orders/my-orders.component";

import { AdminProductsComponent } from "./admin/admin-products/admin-products.component";
import {
  AdminOrdersComponent,
  DialogOverviewAdminComponent
} from "./admin/admin-orders/admin-orders.component";
import { LoginComponent } from "./login/login.component";
import { ProductCardComponent } from "./main/product-card/product-card.component";
import { ProductQuantityComponent } from "./main/product-quantity/product-quantity.component";
import { ShoppingcartDetailComponent } from "./main/shoppingcart-detail/shoppingcart-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    ShoppingcartDetailComponent,
    DialogOverviewComponent,
    DialogOverviewAdminComponent
  ],
  entryComponents: [DialogOverviewComponent, DialogOverviewAdminComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    CustomFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminGuard,
    UserService,
    CategoryService,
    ProductService,
    CartService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
