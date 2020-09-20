import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environmentVariables } from '../constants/url-constants'
import { IEvent } from '../models/Event';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl=environmentVariables.JSON_API_URL;

  constructor(private http: HttpClient) { }

  getAllEvents(): Observable<IEvent[]>{
    let url=this.baseUrl+"/event";
    return this.http.get<IEvent[]>(url);
  }
}
