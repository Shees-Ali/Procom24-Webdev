import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchantPage } from './merchant.page';
import { MerchantRoutingModule } from './merchant-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { MerchantLoginComponent } from './merchant-login/merchant-login.component';



@NgModule({
  declarations: [
    MerchantPage,
    MerchantLoginComponent
  ],
  imports: [
    CommonModule,
    MerchantRoutingModule,
    ComponentsModule
  ]
})
export class MerchantModule { }
