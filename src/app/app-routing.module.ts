import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './main/home/home.component';
import { ProductsComponent } from './main/products/products.component';

const routes: Routes = [
  { path: "", redirectTo: "/products", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "products", component: ProductsComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
