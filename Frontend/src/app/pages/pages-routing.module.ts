import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./front/front.module').then((m) => m.FrontModule),
  },
  {
    path: 'merchant',
    loadChildren: () =>
      import('./merchant/merchant.module').then((m) => m.MerchantModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./customer/customer.module').then((m) => m.CustomerModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
