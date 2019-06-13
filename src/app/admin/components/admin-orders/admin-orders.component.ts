import { Component, Inject, OnInit, OnDestroy } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material";
import { Subscription } from "rxjs/Subscription";
import { Order } from "shared/model/order";
import { OrderService } from "shared/service/order.service";

@Component({
  selector: "app-admin-orders",
  templateUrl: "./admin-orders.component.html",
  styleUrls: ["./admin-orders.component.css"]
})
export class AdminOrdersComponent implements OnInit, OnDestroy {
  order: any;
  orderDownload = false;
  orderSubcription: Subscription;

  constructor(private orderService: OrderService, public dialog: MatDialog) {}

  async ngOnInit() {
    this.order = await this.orderService.getOrder().valueChanges();
    this.orderSubcription = this.order.subscribe(res => {
      this.orderDownload = true;
    });
  }

  orderDetail(item): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(DialogOverviewAdminComponent, {
      height: "500px",
      data: item
    });
  }

  ngOnDestroy() {
    this.orderSubcription.unsubscribe();
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
