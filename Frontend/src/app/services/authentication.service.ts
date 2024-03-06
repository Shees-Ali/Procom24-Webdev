import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url:string = '';

  constructor(public http: HttpClient) { 
    this.url = 'http://localhost:5000/api/';
  }

  login(logindetails:any){
    return this.http.post(this.url + '/auth/signup', logindetails);
  }

  signup(signupdetails:any){
    return this.http.post(this.url + '/auth/signup', signupdetails);
  }
}
