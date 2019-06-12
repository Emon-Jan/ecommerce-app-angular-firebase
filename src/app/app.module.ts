import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatListModule
} from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { CustomFormsModule } from "ng2-validation";
import { SharedModule } from "shared/shared.module";

import { environment } from "./../environments/environment";
import { AdminModule } from "./admin/admin.module";
import { AdminGuard } from "./admin/services/admin-guard.service";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { CheckOutComponent } from "./main/check-out/check-out.component";
import { FooterComponent } from "./main/footer/footer.component";
import { HeaderComponent } from "./main/header/header.component";
import { HomeComponent } from "./main/home/home.component";
import {
  DialogOverviewComponent,
  MyOrdersComponent
} from "./main/my-orders/my-orders.component";
import { OrderSuccessComponent } from "./main/order-success/order-success.component";
import { ProductsComponent } from "./main/products/products.component";
import { ShoppingCartComponent } from "./main/shopping-cart/shopping-cart.component";
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
    LoginComponent,
    ShoppingcartDetailComponent,
    DialogOverviewComponent
  ],
  entryComponents: [DialogOverviewComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    SharedModule,
    AdminModule,
    CustomFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
