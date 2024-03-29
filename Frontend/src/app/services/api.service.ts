import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string;

  constructor(public http: HttpClient) {
    //this.url = 'http://localhost:5000/api';
    this.url ='https://procom24-webdev-backend.vercel.app/api';
  }

  // GET request
  get(endpoint: string, params?: any, reqOpts?: any) {
    return this.http.get(this.url + '/' + endpoint, reqOpts);
  }

  // POST request
  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  }

  // PUT request
  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  // DELETE request
  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  // PATCH request
  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
  }
}
