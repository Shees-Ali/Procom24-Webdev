import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerPage } from './customer.page';
import { CustomerRoutingModule } from './customer-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { CustomerLoginComponent } from './customer-login/customer-login.component';



@NgModule({
  declarations: [
    CustomerPage,
    CustomerLoginComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ComponentsModule
  ]
})
export class CustomerModule { }
