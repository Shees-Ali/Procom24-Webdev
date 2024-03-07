import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../../../base/base';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss',
})
export class CustomersComponent extends BasePage implements OnInit {
  items: any[] = [];

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.getPayments();
  }

  async getPayments() {
    this.utility.showLoader();
    const res = await this.network.getAllCustomers();
    console.log(res);
    if (res) {
      this.items = res.data;
    }
  }
}
