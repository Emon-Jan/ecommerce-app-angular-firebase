import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

import { Order } from "../../model/order";

import { AuthService } from "../../service/auth.service";
import { OrderService } from "../../service/order.service";

@Component({
  selector: "app-my-orders",
  templateUrl: "./my-orders.component.html",
  styleUrls: ["./my-orders.component.css"]
})
export class MyOrdersComponent implements OnInit {
  order: any;
  constructor(
    private authService: AuthService,
    private orderService: OrderService,
    public dialog: MatDialog
  ) {}

  async ngOnInit() {
    this.order = await this.authService.user$.switchMap(user =>
      this.orderService.getOrderByUser(user.uid)
    );
  }

  displayOrderDetail(item): void {
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: "600px",
      data: item
    });
  }
}

@Component({
  templateUrl: "dialog-order-detail.html"
})
export class DialogOverviewComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Order
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
