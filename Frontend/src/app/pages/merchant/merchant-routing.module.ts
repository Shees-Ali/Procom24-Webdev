import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MerchantPage } from './merchant.page';
import { MerchantLoginComponent } from './merchant-login/merchant-login.component';
const routes: Routes = [
{ path: '', component: MerchantLoginComponent },
{ path: 'authenticate', component: MerchantLoginComponent },
{ path: 'home', component: MerchantPage }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantRoutingModule {}
