import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit, OnDestroy } from "@angular/core";

// tslint:disable-next-line:import-blacklist
import { Subscription } from "rxjs";
import "rxjs/add/operator/take";

import { ProductService } from "./../../../service/product.service";
import { CategoryService } from "./../../../service/category.service";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.css"]
})
export class ProductFormComponent implements OnInit, OnDestroy {
  id;
  isDelete = false;
  product = {};
  categories = [];
  cateSubscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.cateSubscription = this.categoryService
      .getCategories()
      .subscribe(res => {
        this.categories = res;
        // console.log(
        //   this.categories[0].key + " " + this.categories[0].payload.val().name
        // );
      });

    if (this.id) {
      this.isDelete = true;
      this.productService
        .getProductFromFirebase(this.id)
        .take(1)
        .subscribe(res => {
          // console.log(res);
          this.product = res;
        });
    }
  }

  save(product) {
    // console.log(product);
    if (this.id) {
      this.productService
        .updateProductOnFirebase(this.id, product)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    } else {
      this.productService.createProductOnFirebase(product);
    }
    this.router.navigate(["/admin-products"]);
  }

  delete() {
    if (this.id) {
      if (confirm("Are you sure to delete this product?")) {
        this.productService
          .removeProductFromFirebase(this.id)
          .then(res => {
            console.log(res);
            this.router.navigate(["/admin-products"]);
          })
          .catch(err => console.log(err));
      }
    } else {
      this.router.navigate(["/admin-products"]);
    }
  }

  ngOnDestroy() {
    this.cateSubscription.unsubscribe();
  }
}
