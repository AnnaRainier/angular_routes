import { Injectable } from '@angular/core';
import { ORDERS } from './orders-mock';
import { Order } from './models/Order';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrdersService {

  constructor() { }

  getOrders(): Observable<Order[]> {
    return of(ORDERS);
  }

  getOrderById(id: number): Observable<Order> {
    const order = ORDERS.find((order) => order.id === id);
    return of(order);
  }
}
