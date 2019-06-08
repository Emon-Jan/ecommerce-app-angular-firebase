import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

import { Order } from "../../model/order";

import { AuthService } from "../../service/auth.service";
import { OrderService } from "../../service/order.service";

@Component({
  selector: "app-admin-orders",
  templateUrl: "./admin-orders.component.html",
  styleUrls: ["./admin-orders.component.css"]
})
export class AdminOrdersComponent implements OnInit {
  order: any;

  constructor(private orderService: OrderService, public dialog: MatDialog) {}

  async ngOnInit() {
    this.order = await this.orderService.getOrder().valueChanges();
    // this.order.subscribe(res => {
    //   console.log(res.key);
    // });
  }

  orderDelete(item) {
    console.log(item.key);
  }

  orderDetail(item): void {
    const dialogRef = this.dialog.open(DialogOverviewAdminComponent, {
      width: "700px",
      data: item
    });
  }
}

@Component({
  templateUrl: "dialog-order-admin-detail.html"
})
export class DialogOverviewAdminComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewAdminComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Order
  ) {}

  onClick(): void {
    this.dialogRef.close();
  }
}
