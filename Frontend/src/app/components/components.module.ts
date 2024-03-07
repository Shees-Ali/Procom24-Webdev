import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { ScreenLoaderComponent } from './screen-loader/screen-loader.component';

@NgModule({
  declarations: [
    SidenavComponent,
    TopBarComponent,
    SidenavComponent,
    AuthenticationComponent,
    PaymentFormComponent,
    ScreenLoaderComponent
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [TopBarComponent, SidenavComponent, AuthenticationComponent, PaymentFormComponent, ScreenLoaderComponent],
})
export class ComponentsModule {}
