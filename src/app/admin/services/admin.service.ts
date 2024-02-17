import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginReq, loginRes, SignupUser, SignupRes } from '../../interfaces/shared';
import { environment } from '../../../environments/environment.development'

const url = environment.adminurl
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  login(data: loginReq) {
    return this.http.post<loginRes>(`${url}/login`, data, { withCredentials: true })
  }

  register(data:SignupUser ) {
    return this.http.post<SignupRes>(`${url}/register`, data, { withCredentials: true })
  }
}
