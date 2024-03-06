import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent implements OnInit {
 @Input() isCustomer: boolean | undefined;
  title : String | undefined;

  ngOnInit(): void{
    this.title = (this.isCustomer == true) ? 'Customer Portal' : 'PayHabib';
  }
}
