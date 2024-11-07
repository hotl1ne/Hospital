import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private apiUrl = 'https://localhost:7038/api/auth';

  constructor(private http: HttpClient) { }

  getUserId() : Observable<any>{
    return this.http.get(`${this.apiUrl}/GetUser`)
  }

}
