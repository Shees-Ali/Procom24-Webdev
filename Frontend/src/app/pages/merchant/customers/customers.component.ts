import { Component } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {
  items: any[] = [
    { 
      customer: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      defaultPaymentMethod: 'Credit Card',
      createDate: '2024-03-06'
    },
    // Add more items as needed
  ];
}
