import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { loginRes } from '../../interfaces/shared';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private router: Router) { }


  setToken(data: loginRes) {
    localStorage.removeItem('dataAdminTokenKhoob')
    return localStorage.setItem('data', JSON.stringify(data))
  }

  getToken(): (null | loginRes) {
    const data = localStorage.getItem('dataAdminTokenKhoob');
    if (data) {
      return JSON.parse(data)
    }
    return null
  }

  deleteToken() {
    localStorage.removeItem('dataAdminTokenKhoob')
    this.router.navigate(['/'])
  }

  isLoggedIn() {
    return this.getToken() !== null
  }
}
