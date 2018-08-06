import { Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "./../../service/auth.service";
import * as firebase from "firebase";
import { Subscription } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnDestroy {
  user: firebase.User;
  afStateSubsciption: Subscription;

  constructor(private authService: AuthService, private router: Router) {
    this.afStateSubsciption = authService.authenticate().subscribe(res => {
      this.user = res;
    });
  }

  onLogout() {
    this.authService.logOut();
    this.router.navigate(["/home"]);
  }

  ngOnDestroy(): void {
    this.afStateSubsciption.unsubscribe();
  }
}
