import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.scss'
})
export class PaymentFormComponent {
  @Input() isCustomer:boolean | undefined;
  paymentForm!: FormGroup<any>;
  
  constructor(private formBuilder:FormBuilder){
    this.paymentForm = this.formBuilder.group({
      username: ['', Validators.required],
      amount: ['', Validators.required],
      customerAccNumber: ['', Validators.required],
      merchantAccNumber: ['', Validators.required],
      bank: ['', Validators.required],
      purpose: ['', Validators.required]
    });
  }
  Submit(){

  }
}
