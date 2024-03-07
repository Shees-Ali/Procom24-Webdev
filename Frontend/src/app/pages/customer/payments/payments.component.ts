import { Component } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss'
})
export class PaymentsComponent {
reject(_t22: any) {
throw new Error('Method not implemented.');
}
pay(_t22: any) {
throw new Error('Method not implemented.');
}
  items: any[] = [
    { 
      customerAccountNo: '123456',
      merchantAccountNo: '789012',
      status: 'Pending',
      description: 'Transaction description',
      time: '10:00 AM',
      date: '2024-03-06',
      amount: 100.00
    },
    // Add more items as needed
  ];
}
