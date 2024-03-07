import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url:string = '';
  isLoggedIn = new Subject<boolean>();
  userCredential: Credential | undefined;
  user: any | undefined;
  
  constructor(public http: HttpClient) { 
    // this.url = 'http://localhost:5000/api/';
    this.url ='https://procom24-webdev-backend.vercel.app/api';
  }

  login(logindetails:any):Observable<any>{
    return this.http.post(this.url + '/auth/login', logindetails);
  }

  signup(signupdetails:any):Observable<any>{
    return this.http.post(this.url + '/auth/signup', signupdetails);
  }
}
