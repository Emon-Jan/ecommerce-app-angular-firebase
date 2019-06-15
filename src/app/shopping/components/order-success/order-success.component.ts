import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'shared/model/order';
import { OrderService } from 'shared/service/order.service';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {
  order: Order;

  constructor(private router: Router, private route: ActivatedRoute, private orderService: OrderService) {
    this.orderService.getOrderById(this.route.snapshot.params.id).subscribe((res: Order) => {
      this.order = res;
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(["/products"]);
    }, 10000);
  }

}
