import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerPage } from './customer.page';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { PaymentsComponent } from './payments/payments.component';
import { InstantPaymentComponent } from './instant-payment/instant-payment.component';
import { QrScanComponent } from './qr-scan/qr-scan.component';

const routes: Routes = [
  { path: '', component:CustomerLoginComponent},
  { path: 'authenticate', component:CustomerLoginComponent},
  { path: 'dashboard', component:CustomerPage,
  children: [
    { path: '', component: PaymentsComponent },
    { path: 'payment', component: PaymentsComponent },
    { path: 'instant-payment', component: InstantPaymentComponent },
    { path: 'qr-scan', component: QrScanComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
