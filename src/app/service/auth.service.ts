import { User } from "./../model/user.model";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { auth } from "firebase";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs";
import * as firebase from "firebase";
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
    let returnUrl =
      this.route.snapshot.queryParamMap.get("returnUrl") || "/home";
    localStorage.setItem("returnUrl", returnUrl);

    this.afAuth.auth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then(res => {
        if (res) {
          this.userService.saveUser(res.user);
          let returnUrl = localStorage.getItem("returnUrl");
          this.router.navigateByUrl(returnUrl);
        }
      });
  }

  logOut() {
    this.afAuth.auth.signOut();
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
