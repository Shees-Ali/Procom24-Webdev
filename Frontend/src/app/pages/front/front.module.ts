;
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontPage } from './front.page';
import { FrontRoutingModule } from './front-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { PricingComponent } from './pricing/pricing.component';
import { FooterComponent } from './footer/footer.component';
import { Footer2Component } from './footer2/footer2.component';




@NgModule({
  declarations: [
    FrontPage,
    NavBarComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    PricingComponent,
    FooterComponent,
    Footer2Component
  ],
  imports: [
    CommonModule,
    FrontRoutingModule
  ]
})
export class FrontModule { }
