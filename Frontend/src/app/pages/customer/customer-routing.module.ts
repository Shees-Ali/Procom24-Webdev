import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerPage } from './customer.page';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
const routes: Routes = [
  { path: '', component:CustomerLoginComponent},
  { path: 'authenticate', component:CustomerLoginComponent},
  { path: 'home', component:CustomerPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
