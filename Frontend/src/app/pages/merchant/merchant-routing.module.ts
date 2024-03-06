import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MerchantPage } from './merchant.page';
const routes: Routes = [{ path: '', component: MerchantPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantRoutingModule {}
