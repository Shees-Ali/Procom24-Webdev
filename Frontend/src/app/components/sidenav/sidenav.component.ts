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
    route: 'customer/dashboard/payment',
  },
  {
    title: 'Instant Payments',
    icon: 'local_atm',
    route: 'customer/dashboard/instant-payment',
  },
  {
    title: 'QR Scan',
    icon: 'qr_code',
    route: 'customer/dashboard/qr-scan',
  },
]

const MerchantSideNav = [
  {
    title: 'Dashboard',
    icon: 'dashboard',
    route: 'merchant/dashboard/main',
  },
  {
    title: 'Payments',
    icon: 'attach_money',
    route: 'merchant/dashboard/payments',
  },
  {
    title: 'Customers',
    icon: 'groups',
    route: 'merchant/dashboard/customers',
  },
  {
    title: 'Payment Requests',
    icon: 'receipt_long',
    route: 'merchant/dashboard/payment-request',
  },
  {
    title: 'Report',
    icon: 'list_alt',
    route: 'merchant/dashboard/report',
  },
  {
    title: 'Setting',
    icon: 'settings',
    route: 'merchant/dashboard/settings',
  },
]