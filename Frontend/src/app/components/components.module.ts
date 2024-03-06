import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AuthenticationComponent } from './authentication/authentication.component';

@NgModule({
  declarations: [
    SidenavComponent,
    TopBarComponent,
    SidenavComponent,
    AuthenticationComponent
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [TopBarComponent, SidenavComponent, AuthenticationComponent],
})
export class ComponentsModule {}
