import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { SharedModule } from "shared/shared.module";

import { environment } from "./../environments/environment";
import { AdminModule } from "./admin/admin.module";
import { AdminGuard } from "./admin/services/admin-guard.service";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./core/components/login/login.component";
import { CoreModule } from "./core/core.module";
import { ShoppingModule } from "./shopping/shopping.module";

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    AdminModule,
    ShoppingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "/products", pathMatch: "full" }
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
