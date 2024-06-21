import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { LoginRequest } from '../../../core/models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/users/sign-in';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    // const params = new HttpParams()
    //   .set('email', email)
    //   .set('password', password);
    //   // const body = { email, password };
    // const headers = new HttpHeaders()
    //   .set('accept', '*/*');

    // return this.http.post<any>(this.apiUrl, { params, headers });
    const headers = new HttpHeaders({
      'accept': '*/*',
      'Content-Type': 'application/json'
    });
    
    const body = { email, password };

    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}
