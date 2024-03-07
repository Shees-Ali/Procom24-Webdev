import { Component } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss'
})
export class PaymentsComponent {
  items: any[] = [
    { 
      customerAccountNo: '123456',
      status: 'Pending',
      description: 'Transaction description',
      bank: 'ABC Bank',
      date: '2024-03-06',
      customer: 'John Doe',
      amount: 100.00
    },
    // Add more items as needed
  ];
}
