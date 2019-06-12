import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";

import { Subscription } from "rxjs";
import { Product } from "shared/model/product.model";
import { ProductService } from "shared/service/product.service";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-admin-products",
  templateUrl: "./admin-products.component.html",
  styleUrls: ["./admin-products.component.css"]
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: any[];
  prodSubscription: Subscription;
  displayedColumns: string[] = ["imageUrl", "title", "price", "key"];
  dataSource: MatTableDataSource<Product>;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.prodSubscription = this.productService
      .getProductsFromFirebase()
      .subscribe(res => {
        this.products = res;
        this.initializeTable(this.products);
      });
  }

  filter(query: string) {
    const filteredProducts = query
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
    this.dataSource = new MatTableDataSource(products);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    this.prodSubscription.unsubscribe();
  }
}
