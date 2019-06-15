import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "shared/shared.module";

import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: "home", component: HomeComponent },
      { path: "login", component: LoginComponent }
    ])
  ],
  exports: [HeaderComponent, FooterComponent],
  declarations: [HeaderComponent, FooterComponent, HomeComponent]
})
export class CoreModule {}
