import { CartService } from "./../../service/cart.service";
import { Product } from "./../../model/product.model";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit, OnDestroy } from "@angular/core";

// tslint:disable-next-line:import-blacklist
import { Subscription } from "rxjs";
import { CategoryService } from "./../../service/category.service";
import { ProductService } from "./../../service/product.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line:no-inferrable-types
  category: string = "";
  cart;
  products: any[];
  filteredProducts: any[];
  categories = [];
  cateSubscription: Subscription;
  prodSubscription: Subscription;
  cartSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,
    private cartService: CartService
  ) {
    this.cateSubscription = this.categoryService
      .getCategories()
      .subscribe(res => {
        this.categories = res;
        // console.log(
        //   this.categories[0].key + " " + this.categories[0].payload.val().name
        // );
      });

    this.prodSubscription = this.productService
      .getProductsFromFirebase()
      .subscribe(res => {
        this.products = res;

        this.route.queryParamMap.subscribe(params => {
          this.category = params.get("category");
          this.filter(this.category);
        });
      });
  }

  async ngOnInit() {
    this.cartSubscription = (await this.cartService.getCart()).subscribe(
      (res: any) => (this.cart = res)
    );
  }

  filter(query: string) {
    this.filteredProducts = query
      ? this.products.filter(
          items => items.payload.val().category === this.category
        )
      : this.products;
  }

  ngOnDestroy() {
    this.prodSubscription.unsubscribe();
    this.cateSubscription.unsubscribe();
    this.cartSubscription.unsubscribe();
  }
}
