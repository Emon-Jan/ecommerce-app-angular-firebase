import { Observable } from "rxjs";
import { AngularFireDatabase } from "angularfire2/database";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {
  constructor(private afdb: AngularFireDatabase) {}

  createProductOnFirebase(product) {
    this.afdb.list("/products").push(product);
  }

  getProductsFromFirebase(): Observable<any[]> {
    return this.afdb.list("/products").snapshotChanges();
  }

  getProductFromFirebase(pid) {
    let obj: Observable<any>;
    obj = this.afdb.object("/products/" + pid).valueChanges();
    return obj;
  }

  updateProductOnFirebase(pid, product) {
    return this.afdb.object("/products/" + pid).update(product);
  }

  removeProductFromFirebase(pid) {
    return this.afdb.object("/products/" + pid).remove();
  }
}
