import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatSelectModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { CustomFormsModule } from "ng2-validation";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { DataTableModule } from "ngx-datatable-bootstrap4";
import { environment } from "./../environments/environment";

import { AuthGuard } from "./service/auth-guard.service";
import { AdminGuard } from "./service/admin-guard.service";
import { AuthService } from "./service/auth.service";
import { UserService } from "./service/user.service";
import { ProductService } from "./service/product.service";
import { CategoryService } from "./service/category.service";

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
import { MyOrdersComponent } from "./main/my-orders/my-orders.component";

import { AdminProductsComponent } from "./admin/admin-products/admin-products.component";
import { AdminOrdersComponent } from "./admin/admin-orders/admin-orders.component";
import { LoginComponent } from "./login/login.component";

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
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    DataTableModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminGuard,
    UserService,
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
