import { Injectable } from "@angular/core";

import { auth } from "firebase";
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  authenticate() {
    return this.afAuth.authState;
  }

  logIn() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logOut() {
    this.afAuth.auth.signOut();
  }
}
