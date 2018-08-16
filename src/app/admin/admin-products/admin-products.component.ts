import { Component, OnInit, OnDestroy } from "@angular/core";

import { Subscription } from "rxjs";
import { Product } from "./../../model/product.model";
import { ProductService } from "./../../service/product.service";
import { DataTableResource } from "ngx-datatable-bootstrap4";

@Component({
  selector: "app-admin-products",
  templateUrl: "./admin-products.component.html",
  styleUrls: ["./admin-products.component.css"]
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: any[];
  prodSubscription: Subscription;
  tableResource: DataTableResource<Product>;
  items: Product[] = [];
  itemCount: number;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.prodSubscription = this.productService
      .getProductsFromFirebase()
      .subscribe(res => {
        this.products = res;
        this.initializeTable(res);
      });
  }

  // filter(query: string) {
  //   this.filteredProducts = query
  //     ? this.products.filter(items =>
  //         items.payload
  //           .val()
  //           .title.toLowerCase()
  //           .includes(query.toLowerCase())
  //       )
  //     : this.products;
  // }
  filter(query: string) {
    let filteredProducts = query
      ? this.products.filter(items =>
          items.payload
            .val()
            .title.toLowerCase()
            .includes(query.toLowerCase())
        )
      : this.products;

    this.initializeTable(filteredProducts);
  }

  private initializeTable(products: Product[]) {
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({ offset: 0 }).then(items => (this.items = items));
    this.tableResource.count().then(count => (this.itemCount = count));
  }

  reloadItems(params) {
    if (!this.tableResource) return;

    this.tableResource.query(params).then(items => (this.items = items));
  }

  ngOnDestroy() {
    this.prodSubscription.unsubscribe();
  }
}
