import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../interface/user";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  postUser(user: User): Observable<User> {
    return this.http.post<User>(`http://localhost:8080/login`, user);
  }
}
