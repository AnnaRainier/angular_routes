import { Pipe, PipeTransform } from '@angular/core';
import { OrdersService } from './orders.service';

@Pipe({
  name: 'changeField'
})
export class ChangeFieldPipe implements PipeTransform {

  constructor(private ordersService: OrdersService){}

  transform(value: any, param: any): any {
    
     let order = Object.create(this.ordersService.getOrderById(value));
    console.log(param);
    console.log(order.value[param]);
    return order.value[param];
  }

}
