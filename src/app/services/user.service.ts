import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environmentVariables } from '../constants/url-constants'
import { IEvent } from '../models/Event';
import { IUser } from '../models/User';
import { map } from 'rxjs/operators';


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

  getAllEvents(): Observable<IEvent[]>{
    let url=this.baseUrl+"/event";
    return this.http.get<IEvent[]>(url);
  }

}
