import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RegUser} from './registration/reg-user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl="http://localhost:3000/users";

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any>{
    return this.http.get<Object[]>(this.baseUrl);
  }

  postRegisteredUser(): Observable<any>{
    let novi= new RegUser("biljana", "stam","b@elfak.rs")
    return this.http.post<Object>(this.baseUrl, novi);
  }

  loginUser():Observable<any>{
    let log={
        "email":"sebastian@codingthesmartway.com",
        "password": "sebi"
    }
    return this.http.post<Object>(this.baseUrl, log);
  }

}
