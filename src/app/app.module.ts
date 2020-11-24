import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';

import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { Cart } from './model/cart.model';
import { CartDetailComponent } from './store/cartDetail.component';
import { CheckOutComponent } from './store/checkout.component';
import { StoreFirstGuard } from './storeFirst.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, StoreModule,
    RouterModule.forRoot([
      { 
        path: 'store', 
        component: StoreComponent,
        canActivate: [StoreFirstGuard],
      },
      { 
        path: 'cart', 
        component: CartDetailComponent,
        canActivate: [StoreFirstGuard],
      },
      { 
        path: 'checkout', 
        component: CheckOutComponent,
        canActivate: [StoreFirstGuard],
      },
      { 
        path: '**', 
        redirectTo: '/store'
      },
    ])
  ],
  providers: [ StoreFirstGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
