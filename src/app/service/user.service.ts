import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import * as firebase from "firebase";
import { User } from "../model/user.model";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class UserService {
  constructor(private fireDb: AngularFireDatabase) {}

  saveUser(user: firebase.User) {
    this.fireDb
      .object("/users/" + user.uid)
      .update({
        userName: user.displayName,
        userEmail: user.email
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  getUser(uid: String): Observable<User> {
    let obj: Observable<any>;
    obj = this.fireDb.object("/users/" + uid).valueChanges();
    return obj;
  }
}
