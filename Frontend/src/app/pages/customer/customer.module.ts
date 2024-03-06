import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerPage } from './customer.page';
import { CustomerRoutingModule } from './customer-routing.module';



@NgModule({
  declarations: [
    CustomerPage
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
