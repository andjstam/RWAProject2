import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RegUser} from '../models/reg-user'
import {RegReziser} from '../models/reg-reziser'
import {RegKorisnik} from '../models/reg-korisnk'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl="http://localhost:3000";

  constructor(private http: HttpClient) { }


  checkIfUserValid(email: string, password: string): Observable<any>{
    let url=this.baseUrl+`/users?email=${email}&&password=${password}`;
    return this.http.get<Object[]>(url);
  }

  getAllUsers(): Observable<any>{
    let url=this.baseUrl+"/users";
    return this.http.get<Object[]>(url);
  }

  getUser(email: string):Observable<any>{
    let url=this.baseUrl+`/users?email=${email}`;
    return this.http.get<Object[]>(url);
  }

  postRegisterUser(user:RegUser):Observable<any>{
    let url=this.baseUrl+`/users`;
    return this.http.post<Object[]>(url,user);
  }

  postRegisterDirector(reziser:RegReziser):Observable<any>{
    let url=this.baseUrl+`/reziser`;
    return this.http.post<Object[]>(url,reziser);
  }

  postRegisterKorisnik(korisnik: RegKorisnik): Observable<any>{
    let url=this.baseUrl+`/korisnik`;
    return this.http.post<Object[]>(url, korisnik);
  }

}
