import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../interface/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, user);
  }

  setToken(token: string): void {
    localStorage.setItem('token', token); // or sessionStorage.setItem('token', token);
  }

  getToken(): string | null{
    return localStorage.getItem('token') || null; // or sessionStorage.getItem('token');
  }
}
