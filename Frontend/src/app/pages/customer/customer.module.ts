import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerPage } from './customer.page';
import { CustomerRoutingModule } from './customer-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { PaymentsComponent } from './payments/payments.component';
import { InstantPaymentComponent } from './instant-payment/instant-payment.component';
import { QrScanComponent } from './qr-scan/qr-scan.component';



@NgModule({
  declarations: [
    CustomerPage,
    CustomerLoginComponent,
    PaymentsComponent,
    InstantPaymentComponent,
    QrScanComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ComponentsModule
  ]
})
export class CustomerModule { }
