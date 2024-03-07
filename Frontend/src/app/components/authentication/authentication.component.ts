import { Component, Injector, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilityService } from '../../services/utility.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { BasePage } from '../../base/base';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss',
})
export class AuthenticationComponent extends BasePage implements OnInit {
  @Input() isCustomer: boolean | undefined;
  signInForm!: FormGroup<any>;
  signUpForm!: FormGroup<any>;
  title: string | undefined;
  isSignup: boolean = false;

  constructor(injector: Injector) {
    super(injector);
    this.signInForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    this.signUpForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      accountNumber: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.title = this.isCustomer == true ? 'Customer Portal' : 'PayHabib';
  }

  async Login() {
    this.utility.showLoader();
    if (this.signInForm.invalid) {
      this.utility.presentAlert('Fill All Fields');
      return;
    }

    const res = await this.network.login(this.signInForm.value);
    console.log("login res", res);
    if (res) {
      if (res.userDetails.userRole == 'customer') {
        this.router.navigateByUrl('customer/dashboard');
      }
    }
    this.utility.hideLoader();
  }

  async Signup() {
    this.utility.showLoader();
    if (this.signUpForm.invalid) {
      this.utility.presentAlert('Fill All Fields');
      return;
    }

    const res = await this.network.signUp(this.signUpForm.value);
    console.log("sign up res", res);
    if (res.message == 'User created successfully') {
      this.utility.presentSuccessAlert(res.message);
      this.toggleForm();
    }
    this.utility.hideLoader();
  }

  toggleForm() {
    this.isSignup = !this.isSignup;
  }
}
