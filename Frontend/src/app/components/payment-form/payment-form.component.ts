import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.scss'
})
export class PaymentFormComponent {
  @Input() isCustomer:boolean | undefined;
  paymentForm!: FormGroup<any>;

  Submit(){

  }
}
