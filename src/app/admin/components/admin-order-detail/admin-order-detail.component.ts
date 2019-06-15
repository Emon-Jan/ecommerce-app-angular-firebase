import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Order } from 'shared/model/order';
import { OrderService } from 'shared/service/order.service';

@Component({
  selector: 'app-admin-order-detail',
  templateUrl: './admin-order-detail.component.html',
  styleUrls: ['./admin-order-detail.component.css']
})
export class AdminOrderDetailComponent implements OnInit, OnDestroy {
  order: Order;
  orderSubscription: Subscription;

  constructor(private route: ActivatedRoute, private orderService: OrderService) {
    this.orderSubscription = this.orderService.getOrderById(this.route.snapshot.params.orderId).subscribe((res: Order) => {
      this.order = res;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.orderSubscription.unsubscribe();
  }

  printPage() {
    window.print();
  }

}
