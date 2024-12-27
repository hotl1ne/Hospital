import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ILogin } from '../../../models/Auth/IAuth.module';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class Auth {

  private apiUrl = 'https://localhost:7038/api/auth';

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) { }

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

  checkToken(): boolean {
    const token = this.getToken();
    if (token) {
      return !this.isTokenExpired(token);
    }
    return false;
  }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return sessionStorage.getItem('jwt');
    }
    return null; // або обробіть відсутність `sessionStorage`
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null; 
  }

  logOut() {
    if(this.isLoggedIn()){
      sessionStorage.clear();
      localStorage.clear();
      return this.http.delete(`${this.apiUrl}/Logout/${this.getToken()}`);
    }
    else{
      sessionStorage.clear();
      return alert("Something went wrong, you were logged out!");
    }
  }
}
