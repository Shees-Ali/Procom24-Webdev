import { Component, Injector, Input, OnInit, inject } from '@angular/core';
import { BasePage } from '../../base/base';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent extends BasePage implements OnInit {
 @Input() isCustomer: boolean | undefined;
  title : String | undefined;
  user: any;

  constructor(injector:Injector){
    super(injector);
    this.getCurrentUser();
  }
  
  async getCurrentUser() {
    this.user = await this.userService.getCurrentUser();
  }

  ngOnInit(): void{
    this.title = (this.isCustomer == true) ? 'Customer Portal' : 'PayHabib';
  }

  logout(){
    this.userService.logout();
    if(this.isCustomer) this.router.navigate(['customer/'])
    else this.router.navigate(['merchant/'])
  }
}
