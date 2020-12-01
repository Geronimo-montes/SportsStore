import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { Cart} from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { RestDataSource } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    ProductRepository, 
    OrderRepository,
    RestDataSource,
    Cart,
    Order,
    AuthService,
  ],
})
export class ModelModule {

}