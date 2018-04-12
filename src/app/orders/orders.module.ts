import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrdersContainerComponent } from './orders-container/orders-container.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { RouterModule } from '@angular/router';
import { OrdersService } from '../orders/orders.service';
import { ChangeFieldPipe } from './change-field.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  declarations: [OrderDetailsComponent, OrdersContainerComponent, OrdersListComponent, ChangeFieldPipe],
  providers: [OrdersService]
})
export class OrdersModule { }
