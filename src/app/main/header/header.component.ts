import { Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";

import { User } from "./../../model/user.model";
import { AuthService } from "./../../service/auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnDestroy {
  guestUser: User;
  authSubscription: Subscription;
  constructor(private authService: AuthService, private router: Router) {
    this.authSubscription = this.authService.eUser.subscribe(
      user => (this.guestUser = user)
    );
  }

  onLogout() {
    this.authService.logOut();
    this.router.navigate(["/home"]);
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
