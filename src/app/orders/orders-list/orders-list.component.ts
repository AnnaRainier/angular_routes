import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Order } from '../models/Order';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  orders$: Observable<Order[]>

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.orders$ = this.ordersService.getOrders();
  }

}
