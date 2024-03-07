import { Component, Injector, Input, OnInit, inject } from '@angular/core';
import { BasePage } from '../../base/base';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent implements OnInit {
 @Input() isCustomer: boolean | undefined;
  title : String | undefined;

  constructor(private router:Router, private userService:UserService){
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
