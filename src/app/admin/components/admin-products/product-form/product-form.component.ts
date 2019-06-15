import "rxjs/add/operator/take";

import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { CategoryService } from "shared/service/category.service";
import { ProductService } from "shared/service/product.service";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.css"]
})
export class ProductFormComponent implements OnInit, OnDestroy {
  id: string;
  isDelete = false;
  product: any = {};
  categories: any = [];
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
      });

    if (this.id) {
      this.isDelete = true;
      this.productService
        .getProductFromFirebase(this.id)
        .take(1)
        .subscribe(res => {
          this.product = res;
        });
    }
  }

  save(product) {
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
            this.router.navigate(["/admin-products"]);
          })
          .catch(err => console.log(err));
      }
    } else {
      this.router.navigate(["/admin-products"], { relativeTo: this.route });
    }
  }

  goBack() {
    this.router.navigate(["/admin-products"], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.cateSubscription.unsubscribe();
  }
}
