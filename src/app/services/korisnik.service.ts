import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {
  private baseUrl="http://localhost:3000";

  constructor(private http: HttpClient) { }

  getAllEvents(): Observable<any>{
    let url=this.baseUrl+"/oglas";
    return this.http.get<Object[]>(url);
  }
}
