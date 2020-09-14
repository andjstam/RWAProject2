import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Event} from '../models/event'

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  private baseUrl="http://localhost:3000";

  constructor(private http: HttpClient) { }

  postEvent(oglas: Event):Observable<any>{
    let url=this.baseUrl+`/event`;
    return this.http.post<Object[]>(url,oglas);
  }

  updateEvent(idOglasa: number, oglas: Event):Observable<any>{
    let url=this.baseUrl+`/event/${idOglasa}`;
    return this.http.put<Object[]>(url,oglas);
  }

  deleteEvent( eventId: number):Observable<any>{
    let url=this.baseUrl+`/event/${eventId}`;
    return this.http.delete<Object[]>(url);
  }

  getAllUsers() : Observable<any>{
    let url=this.baseUrl+"/user";
    return this.http.get<Object[]>(url);
  }

  getDirectorByEmail(email: string): Observable<any>{
    let url=this.baseUrl+`/director?email=${email}`;
    return this.http.get<Object[]>(url);
  }
  
  getEventsByDirectorsId( id: number): Observable<any>{
    let url=this.baseUrl+`/event?directorId=${id}`;
    return this.http.get<Object[]>(url);
  }
  
  
  //da uzima predlozene korisnike za event
  //metoda da update korisnika i da upise novog radnika
}
