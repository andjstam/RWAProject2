import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RegUser} from './registration/reg-user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl="http://localhost:3000/korisnik";

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any>{
    return this.http.get<Object[]>(this.baseUrl);
  }

  postRegisteredUser(): Observable<any>{
    const url="http://localhost:3000/auth/login";
    let novi= new RegUser("bruno@email.com", "bruno")
    return this.http.post<Object>(url, novi);
  }


}
