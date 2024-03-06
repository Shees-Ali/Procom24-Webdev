import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerPage } from './customer.page';
import { CustomerRoutingModule } from './customer-routing.module';
import { ComponentsModule } from '../../components/components.module';



@NgModule({
  declarations: [
    CustomerPage,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ComponentsModule
  ]
})
export class CustomerModule { }
