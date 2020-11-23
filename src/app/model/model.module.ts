import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { Cart} from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { RestDataSource } from './rest.datasource';
@NgModule({
  providers: [
    ProductRepository, 
    //StaticDataSource, 
    RestDataSource,
    Cart,
    Order,
    OrderRepository,
  ],
})
export class ModelModule {

}