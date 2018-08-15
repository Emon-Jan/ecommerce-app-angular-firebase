import { Component, OnInit } from "@angular/core";

import { Product } from "./../../model/product.model";
import { ProductService } from "./../../service/product.service";

@Component({
  selector: "app-admin-products",
  templateUrl: "./admin-products.component.html",
  styleUrls: ["./admin-products.component.css"]
})
export class AdminProductsComponent implements OnInit {
  products: any[];
  filteredProducts: Product[];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProductsFromFirebase().subscribe(res => {
      this.filteredProducts = this.products = res;
    });
  }

  filter(query: string) {
    this.filteredProducts = query
      ? this.products.filter(items =>
          items.payload
            .val()
            .title.toLowerCase()
            .includes(query.toLowerCase())
        )
      : this.products;
  }
}
