import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'shared/service/cart.service';
import { CategoryService } from 'shared/service/category.service';
import { ProductService } from 'shared/service/product.service';

// tslint:disable-next-line:import-blacklist
@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit, OnDestroy {
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
