import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Oglas} from '../models/oglas'

@Injectable({
  providedIn: 'root'
})
export class ReziserService {

  private baseUrl="http://localhost:3000";

  constructor(private http: HttpClient) { }

  postEvent(oglas: Oglas):Observable<any>{
    let url=this.baseUrl+`/oglas`;
    return this.http.post<Object[]>(url,oglas);
  }

  getAllUsers() : Observable<any>{
    let url=this.baseUrl+"/korisnik";
    return this.http.get<Object[]>(url);
  }
}
