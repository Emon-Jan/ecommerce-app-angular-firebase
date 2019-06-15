import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { OrderService } from 'shared/service/order.service';

@Component({
  selector: "app-admin-orders",
  templateUrl: "./admin-orders.component.html",
  styleUrls: ["./admin-orders.component.css"]
})
export class AdminOrdersComponent implements OnInit, OnDestroy {
  order: any;
  orderDownload = false;
  orderSubcription: Subscription;

  constructor(
    private orderService: OrderService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.order = await this.orderService.getOrder().snapshotChanges();
    this.orderSubcription = this.order.subscribe(res => {
      this.orderDownload = true;
    });
  }

  orderDetail(orderKey): void {
    this.router.navigate(["admin-orders/details", orderKey]);
  }

  ngOnDestroy() {
    this.orderSubcription.unsubscribe();
  }
}
