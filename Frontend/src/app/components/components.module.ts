import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    SidenavComponent,
    TopBarComponent,
    SidenavComponent,
    LoginComponent
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [TopBarComponent, SidenavComponent],
})
export class ComponentsModule {}
