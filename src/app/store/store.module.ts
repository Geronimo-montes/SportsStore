import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store.component';
import { CounterDirective } from './counter.directive';
import { CartSummaryComponent } from './cartSummary.component';
import { CartDetailComponent } from './cartDetail.component';
import { CheckOutComponent } from './checkout.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        StoreComponent, 
        CounterDirective,
        CartSummaryComponent,
        CartDetailComponent,
        CheckOutComponent,
    ],
    imports: [
        ModelModule, 
        BrowserModule, 
        FormsModule,
        RouterModule,
        HttpClientModule,
    ],
    exports: [
        StoreComponent,
        CartDetailComponent,
        CheckOutComponent,
    ]
})
export class StoreModule{ }