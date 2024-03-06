import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontPage } from './front.page';
import { FrontRoutingModule } from './front-routing.module';



@NgModule({
  declarations: [
    FrontPage
  ],
  imports: [
    CommonModule,
    FrontRoutingModule
  ]
})
export class FrontModule { }
