import { Component, Injector, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BasePage } from '../../base/base';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.scss',
})
export class PaymentFormComponent extends BasePage {
  @Input() isCustomer: boolean | undefined;
  paymentForm!: FormGroup<any>;
  user: any;
  constructor(injector: Injector) {
    super(injector);
    this.paymentForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: [''],
      amount: ['', Validators.required],
      accountNumber: ['', Validators.required],
      merchantAccNumber: ['', Validators.required],
      bank: ['', Validators.required],
      paymentPurpose: ['', Validators.required],
    });
    this.getCurrentUser();
  }

  async getCurrentUser() {
    this.user = await this.userService.getCurrentUser();
    const userPatchData = {
      username: this.user.username,
      email: this.user.email,
      accountNumber: this.user.accountNumber,
    };
    this.paymentForm.patchValue(userPatchData);
  }

  async Submit() {
    this.utility.showLoader();
    console.log(this.paymentForm);
    if (this.paymentForm.invalid) {
      this.utility.presentAlert('Fill All Fields');
      return;
    }

    const res = await this.network.createOrder(this.paymentForm.value);

    console.log(res);
    if (res.data) {
      this.utility.presentSuccessAlert(res.message);
      this.router.navigate(['customer/dashboard/payment']);
    }
  }
}
