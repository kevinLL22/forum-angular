import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Topic} from "../interface/topic";
@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) { }

  getTopic(): Observable<Topic> {
    return this.http.get<Topic>(`http://localhost:8080/topic/1`);
  }
}
