import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilityService } from '../../services/utility.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss',
})
export class AuthenticationComponent implements OnInit {
  @Input() isCustomer: boolean | undefined;
  signInForm!: FormGroup<any>;
  signUpForm!: FormGroup<any>;
  title: string | undefined;
  isSignup: boolean = false;

  constructor(
    private utility: UtilityService,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router:Router
  ) {
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

  Login() {
    this.utility.showLoader();
    console.log(this.signInForm.value);
    this.authService.login(this.signInForm.value).subscribe((a) => {
      console.log(a);
      this.utility.hideLoader();
      if(a.userDetails.userRole == "customer"){
        this.router.navigateByUrl('customer/dashboard')
      }
    });
  }

  Signup() {
    this.utility.showLoader();
    console.log(this.signUpForm.value);
    this.authService.signup(this.signUpForm.value).subscribe((a) => {
      console.log(a);
      this.utility.hideLoader();
      if(a.message == "user created successfully"){
        this.utility.presentSuccessAlert(a.message);
      }
    });
  }

  toggleForm(){
    this.isSignup = !this.isSignup;
  }
}
