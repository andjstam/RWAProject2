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

  updateEvent(idOglasa: number, oglas: Oglas):Observable<any>{
    let url=this.baseUrl+`/oglas/${idOglasa}`;
    return this.http.put<Object[]>(url,oglas);
  }

  deleteEvent(idOglasa: number):Observable<any>{
    let url=this.baseUrl+`/oglas/${idOglasa}`;
    return this.http.delete<Object[]>(url);
  }

  getAllUsers() : Observable<any>{
    let url=this.baseUrl+"/korisnik";
    return this.http.get<Object[]>(url);
  }

  //da uzima predlozene korisnike za event
  //metoda da update korisnika i da upise novog radnika
}