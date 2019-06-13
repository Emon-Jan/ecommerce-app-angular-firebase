import { Component, Inject, OnInit, OnDestroy } from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { Order } from "shared/model/order";
import { AuthService } from "shared/service/auth.service";
import { OrderService } from "shared/service/order.service";

@Component({
  selector: "app-my-orders",
  templateUrl: "./my-orders.component.html",
  styleUrls: ["./my-orders.component.css"]
})
export class MyOrdersComponent implements OnInit, OnDestroy {
  order: any;
  orderDownload = false;
  orderSubcription: Subscription;

  constructor(
    private authService: AuthService,
    private orderService: OrderService,
    public dialog: MatDialog
  ) {}

  async ngOnInit() {
    this.order = await this.authService.user$.switchMap(user =>
      this.orderService.getOrderByUser(user.uid)
    );
    this.orderSubcription = this.order.subscribe(res => {
      this.orderDownload = true;
    });
  }

  displayOrderDetail(item): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      height: "500px",
      data: item
    });
  }

  ngOnDestroy() {
    this.orderSubcription.unsubscribe();
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
