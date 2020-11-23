import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ApiRestComponet } from './api-rest.component';
import { ApiRestService } from './api-rest.service';
@NgModule({
  declarations: [
    ApiRestComponet
  ],
  imports: [
    BrowserModule, FormsModule, CommonModule
  ],
  exports: [
    ApiRestComponet
  ],
  providers: [
    ApiRestService
  ],
})
export class ApiRestModule {

}