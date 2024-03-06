import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchantPage } from './merchant.page';
import { MerchantRoutingModule } from './merchant-routing.module';
import { ComponentsModule } from '../../components/components.module';



@NgModule({
  declarations: [
    MerchantPage
  ],
  imports: [
    CommonModule,
    MerchantRoutingModule,
    ComponentsModule
  ]
})
export class MerchantModule { }
