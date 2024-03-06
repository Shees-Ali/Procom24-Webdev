import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchantPage } from './merchant.page';
import { MerchantRoutingModule } from './merchant-routing.module';



@NgModule({
  declarations: [
    MerchantPage
  ],
  imports: [
    CommonModule,
    MerchantRoutingModule
  ]
})
export class MerchantModule { }
