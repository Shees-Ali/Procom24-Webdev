import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilityService } from '../../services/utility.service';
import { AuthenticationService } from '../../services/authentication.service';

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
    private formBuilder: FormBuilder
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
    this.authService.login(this.signInForm.value).subscribe(() => {
      this.utility.hideLoader();
    });
  }

  Signup() {
    this.utility.showLoader();
    console.log(this.signUpForm.value);
    this.authService.signup(this.signUpForm.value).subscribe(() => {
      this.utility.hideLoader();
    });
  }

  toggleForm(){
    this.isSignup = !this.isSignup;
  }
}
