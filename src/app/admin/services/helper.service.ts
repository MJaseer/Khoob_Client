import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { loginRes } from '../../interfaces/shared';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private router: Router) { }


  setToken(data: loginRes) {
    localStorage.removeItem('dataTokenKhoob')
    return localStorage.setItem('data', JSON.stringify(data))
  }

  getToken(): (null | loginRes) {
    const data = localStorage.getItem('data');
    if (data) {
      return JSON.parse(data)
    }
    return null
  }

  deleteToken() {
    localStorage.removeItem('data')
    this.router.navigate(['/'])
  }

  isLoggedIn() {
    return this.getToken() !== null
  }
}
