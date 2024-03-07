import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchantPage } from './merchant.page';
import { MerchantRoutingModule } from './merchant-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { MerchantLoginComponent } from './merchant-login/merchant-login.component';
import { HomeComponent } from './home/home.component';
import { PaymentsComponent } from './payments/payments.component';
import { CustomersComponent } from './customers/customers.component';
import { PaymentRequestComponent } from './payment-request/payment-request.component';
import { ReportComponent } from './report/report.component';
import { SettingsComponent } from './settings/settings.component';



@NgModule({
  declarations: [
    MerchantPage,
    MerchantLoginComponent,
    HomeComponent,
    PaymentsComponent,
    CustomersComponent,
    PaymentRequestComponent,
    ReportComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    MerchantRoutingModule,
    ComponentsModule
  ]
})
export class MerchantModule { }
