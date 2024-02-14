import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginReq, loginRes,SignupUser } from '../../interfaces/shared';

const url = 'http://localhost:5001/api'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  login(data: loginReq) {
    return this.http.post<loginRes>(`${url}/login`, data, { withCredentials: true })
  }

  register(data:SignupUser ) {
    return this.http.post(`${url}/sign-up`, data, { withCredentials: true })
  }


}
