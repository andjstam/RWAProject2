import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Event, IEvent} from '../models/Event'
import { environmentVariables } from '../constants/url-constants'
import { IDirector } from '../models/Director';
import { IUser } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  private baseUrl=environmentVariables.JSON_API_URL;

  constructor(private http: HttpClient) { }

  getDirectorByEmail(email: string): Observable<IDirector>{
    let url=this.baseUrl+`/director?email=${email}`;
    return this.http.get<IDirector>(url);
  }
  
  getEventsByDirectorsId( id: number): Observable<IEvent[]>{
    let url=this.baseUrl+`/event?directorId=${id}`;
    return this.http.get<IEvent[]>(url);
  }

  postEvent(oglas: Event):Observable<IEvent>{
    let url=this.baseUrl+`/event`;
    return this.http.post<IEvent>(url,oglas);
  }

  updateEvent(idOglasa: number, oglas: Event):Observable<IEvent>{
    let url=this.baseUrl+`/event/${idOglasa}`;
    return this.http.put<IEvent>(url,oglas);
  }

  deleteEvent( eventId: number):Observable<IEvent>{
    let url=this.baseUrl+`/event/${eventId}`;
    return this.http.delete<IEvent>(url);
  }

  getAllUsers() : Observable<IUser[]>{
    let url=this.baseUrl+"/user";
    return this.http.get<IUser[]>(url);
  }
  
  //da uzima predlozene korisnike za event
  //metoda da update korisnika i da upise novog radnika
}
