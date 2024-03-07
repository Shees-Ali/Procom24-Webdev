import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantPaymentComponent } from './instant-payment.component';

describe('InstantPaymentComponent', () => {
  let component: InstantPaymentComponent;
  let fixture: ComponentFixture<InstantPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstantPaymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstantPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
