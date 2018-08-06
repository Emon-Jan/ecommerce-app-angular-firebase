import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { auth } from "firebase";
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  authenticate() {
    return this.afAuth.authState;
  }

  logIn() {
    let returnUrl =
      this.route.snapshot.queryParamMap.get("returnUrl") || "/home";
    localStorage.setItem("returnUrl", returnUrl);

    this.afAuth.auth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then(user => {
        let returnUrl = localStorage.getItem("returnUrl");
        this.router.navigateByUrl(returnUrl);
      });
  }

  logOut() {
    this.afAuth.auth.signOut();
  }
}
