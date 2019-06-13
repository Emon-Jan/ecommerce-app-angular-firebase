import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "shared/shared.module";

import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { ProductsComponent } from "./components/products/products.component";

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: "home", component: HomeComponent },
      { path: "products", component: ProductsComponent },
      { path: "login", component: LoginComponent }
    ])
  ],
  exports: [HeaderComponent, FooterComponent],
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent
  ]
})
export class CoreModule {}
