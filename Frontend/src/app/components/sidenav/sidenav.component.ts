import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit {
  @Input() isCustomer: boolean | undefined;
  navItems: any[] | undefined;

  ngOnInit(): void {
    this.navItems = (this.isCustomer == true)? CustomerSideNav : MerchantSideNav;
  }
}


const CustomerSideNav = [
  {
    title: 'Payments',
    icon: 'attach_money',
    route: '',
  },
  {
    title: 'Instant Payments',
    icon: 'local_atm',
    route: '',
  },
  {
    title: 'QR Scan',
    icon: 'qr_code',
    route: '',
  },
]

const MerchantSideNav = [
  {
    title: 'Dashboard',
    icon: 'dashboard',
    route: '',
  },
  {
    title: 'Payments',
    icon: 'attach_money',
    route: '',
  },
  {
    title: 'Customers',
    icon: 'groups',
    route: '',
  },
  {
    title: 'Payment Requests',
    icon: 'receipt_long',
    route: '',
  },
  {
    title: 'Report',
    icon: 'list_alt',
    route: '',
  },
  {
    title: 'Setting',
    icon: 'settings',
    route: '',
  },
]