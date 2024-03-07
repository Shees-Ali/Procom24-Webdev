import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../../../base/base';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss',
})
export class PaymentsComponent extends BasePage implements OnInit {
  items: any[] = [];

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.getPayments();
  }

  async getPayments() {
    this.utility.showLoader();
    const res = await this.network.getOrders();
    console.log(res);
    if (res) {
      this.items = res.data;
    }
  }

  async reject(item: any) {
    const updateObj = {
      status: 'Rejected',
    };
    const res = await this.network.updateOrder(item._id, updateObj);
    if (res.data) {
      item.status = 'Rejected';
    }
  }

  async pay(item: any) {
    const updateObj = {
      status: 'Succeeded',
    };
    const res = await this.network.updateOrder(item._id, updateObj);
    if (res.data) {
      item.status = 'Succeeded';
    }
  }
}
