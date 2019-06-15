import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs";
import "rxjs/Rx";

import * as firebase from "firebase";
import { User } from "shared/model/user.model";
import { UserService } from "./user.service";

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.user$ = afAuth.authState;
  }

  logIn() {
    const returnUrl =
      this.route.snapshot.queryParamMap.get("returnUrl") || "/products";
    localStorage.setItem("returnUrl", returnUrl);

    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => {
        if (res) {
          this.userService.saveUser(res.user);
          const getReturnUrl = localStorage.getItem("returnUrl");
          this.router.navigateByUrl(getReturnUrl);
        }
      });
  }

  logOut() {
    this.afAuth.auth.signOut();
    this.router.navigate(["/products"]);
  }

  get eUser(): Observable<User> {
    return this.user$.switchMap(dbuser => {
      if (dbuser) {
        return this.userService.getUser(dbuser.uid);
      } else {
        return Observable.of(null);
      }
    });
  }
}
