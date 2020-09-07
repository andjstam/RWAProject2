import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoggedUser} from '../models/logged-user'
import {Director} from '../models/director'
import {User} from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl="http://localhost:3000";

  constructor(private http: HttpClient) { }


  checkIfUserValid(email: string, password: string): Observable<any>{
    let url=this.baseUrl+`/loggedUsers?email=${email}&&password=${password}`;
    return this.http.get<Object[]>(url);
  }

  getAllUsers(): Observable<any>{
    let url=this.baseUrl+"/loggedUsers";
    return this.http.get<Object[]>(url);
  }

  getUser(email: string):Observable<any>{
    let url=this.baseUrl+`/loggedUsers?email=${email}`;
    return this.http.get<Object[]>(url);
  }

  postRegisterUser(user:LoggedUser):Observable<any>{
    let url=this.baseUrl+`/loggedUsers`;
    return this.http.post<Object[]>(url,user);
  }

  postRegisterDirector(reziser:Director):Observable<any>{
    let url=this.baseUrl+`/director`;
    return this.http.post<Object[]>(url,reziser);
  }

  postRegisterKorisnik(korisnik: User): Observable<any>{
    let url=this.baseUrl+`/user`;
    return this.http.post<Object[]>(url, korisnik);
  }

}
