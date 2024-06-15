import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { LoginRequest } from '../../../core/models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = ''; // Replace with your API URL

  constructor(private http: HttpClient) { }

  login(request: LoginRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, request, { headers })
      .pipe(
        map(response => {
          // Handle successful login response
          return response;
        })
      );
  }
}
