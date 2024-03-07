import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MerchantPage } from './merchant.page';
import { MerchantLoginComponent } from './merchant-login/merchant-login.component';
import { HomeComponent } from './home/home.component';
import { PaymentsComponent } from './payments/payments.component';
import { CustomersComponent } from './customers/customers.component';
import { PaymentRequestComponent } from './payment-request/payment-request.component';
import { ReportComponent } from './report/report.component';
import { SettingsComponent } from './settings/settings.component';
const routes: Routes = [
{ path: '', component: MerchantLoginComponent },
{ path: 'authenticate', component: MerchantLoginComponent },
{ path: 'dashboard', component:MerchantPage,
  children: [
    { path: '', component: HomeComponent },
    { path: 'main', component: HomeComponent },
    { path: 'payments', component: PaymentsComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'payment-request', component: PaymentRequestComponent },
    { path: 'report', component: ReportComponent },
    { path: 'settings', component: SettingsComponent },
  ]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantRoutingModule {}
