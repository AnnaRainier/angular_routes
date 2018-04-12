import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from '../models/Order';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { OrdersService } from '../orders.service';
import 'rxjs/add/operator/switchMap';
import { CurrencyPipe } from '@angular/common';
import { ChangeFieldPipe } from '../change-field.pipe';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit, OnDestroy {
  order: Order
  subscription: Subscription
  constructor(private route: ActivatedRoute, private ordersService: OrdersService) { }

  ngOnInit() {
    this.subscription = this.route.paramMap
    .switchMap((params: ParamMap) => {
      const id = Number(params.get('id'));

      return this.ordersService.getOrderById(id)
    }
  ).subscribe((order: Order) => this.order = order)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
