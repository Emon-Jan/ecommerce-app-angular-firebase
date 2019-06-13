import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { SharedModule } from "shared/shared.module";

import { environment } from "./../environments/environment";
import { AdminModule } from "./admin/admin.module";
import { AdminGuard } from "./admin/services/admin-guard.service";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { LoginComponent } from "./login/login.component";
import { ShoppingModule } from "./shopping/shopping.module";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    CommonModule,
    CoreModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
