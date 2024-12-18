import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ILogin } from '../../../models/Auth/IAuth.module';


@Injectable({
  providedIn: 'root'
})
export class Auth {

  private apiUrl = 'https://localhost:7038/api/auth';

  constructor(private http: HttpClient) { }

  login(data: ILogin): Observable<any> {
    return this.http.post(`${this.apiUrl}/Login`, data);
  }

  saveToken(token: string): void {
    sessionStorage.setItem('jwt', token); 
  }

  isTokenExpired(token: string): boolean {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    console.log(decodedToken);
    const isExpired = helper.isTokenExpired(token);
    if(isExpired)
    {
      return true;
    }
    return false;
  }

  checkToken() : boolean {
    const token = this.getToken();
    if (token && this.isTokenExpired(token)) {
      return false;
    } else {
      return true;
    }
  }

  getToken(): string | null {
    return sessionStorage.getItem('jwt'); 
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null; 
  }

  logOut() {
    if(this.isLoggedIn()){
      sessionStorage.clear();

      return this.http.delete(`${this.apiUrl}/Logout`);

    }
    else{
      sessionStorage.clear();
      return alert("Something went wrong, you were logged out!");
    
    }
  }

}
