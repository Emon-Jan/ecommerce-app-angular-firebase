import { Observable } from "rxjs";
import { AngularFireDatabase } from "angularfire2/database";
import { Injectable } from "@angular/core";

@Injectable()
export class CategoryService {
  constructor(private afdb: AngularFireDatabase) {}

  getCategories(): Observable<any[]> {
    return this.afdb
      .list("/categories", ref => ref.orderByChild("name"))
      .snapshotChanges();
  }
}
