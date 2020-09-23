import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environmentVariables } from '../constants/url-constants'
import { IEvent } from '../models/Event';
import { IUser, User } from '../models/User';
import { map } from 'rxjs/operators';
import { EventSignedEmplyed, IEventSignedEmployed } from '../models/EventSignedEmployed';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl=environmentVariables.JSON_API_URL;

  constructor(private http: HttpClient) { }

  getUserByEmail(email: string): Observable<IUser>{
    let url=this.baseUrl+`/user?email=${email}`;
    return this.http.get<IUser>(url).pipe(
      map(u => u[0])
    );
  }

  updateUser(idUser: number, user: User): Observable<IUser>{
    let url=this.baseUrl+`/user/${idUser}`;
    return this.http.put<IUser>(url,user) .pipe(
      map(u => u[0])
    );
  }

  getAllEvents(): Observable<IEvent[]>{
    let url=this.baseUrl+"/event";
    return this.http.get<IEvent[]>(url);
  }

  getAllEventSigned(): Observable<IEventSignedEmployed[]>{
    let url=this.baseUrl+"/eventSignedUp";
    return this.http.get<IEventSignedEmployed[]>(url);
  }

  postEventSigned( eventSigned: EventSignedEmplyed): Observable<IEventSignedEmployed>{
    let url=this.baseUrl+"/eventSignedUp";
    return this.http.post<IEventSignedEmployed>(url,eventSigned);
  }

  deletEventSigned(idObjekta: number): Observable<IEventSignedEmployed>{
    let url=this.baseUrl+`/eventSignedUp/${idObjekta}`;
    return this.http.delete<IEventSignedEmployed>(url);
  }

  getAllEventsEmployed(): Observable<IEventSignedEmployed[]>{
    let url=this.baseUrl+"/eventEmployed";
    return this.http.get<IEventSignedEmployed[]>(url);
  }
 
  postEventEmployed( eventEmployed: EventSignedEmplyed): Observable<IEventSignedEmployed>{
    let url=this.baseUrl+"/eventEmployed";
    return this.http.post<IEventSignedEmployed>(url,eventEmployed);
  }

  deletEventEmployed(idObjekta: number): Observable<IEventSignedEmployed>{
    let url=this.baseUrl+`/eventEmployed/${idObjekta}`;
    return this.http.delete<IEventSignedEmployed>(url);
  }

  // deleteEventSigned( eventSigned: EventSignedEmplyed): Observable<IEventSignedEmployed>{
  //   let url=this.baseUrl+"/eventSignedUp/eventSignedUp";
  //   return this.http.delete<IEventSignedEmployed>();
  // }

}
