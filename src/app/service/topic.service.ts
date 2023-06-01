import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Topic} from "../interface/topic";
import {PostTopic} from "../interface/topic/post-topic";
import {PutTopic} from "../interface/topic/put-topic";
import {environment} from "../../environments/environment.staging";
import {PageableTopic} from "../interface/topic/pageable-topic";

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  apiUrl= environment.apiUrl;

  constructor(private http: HttpClient) { }

  getTopic(id: number): Observable<Topic> {
    return this.http.get<Topic>(`${this.apiUrl}/topic/${id}`);
  }

  getAllTopics(): Observable<PageableTopic> {
    return this.http.get<PageableTopic>(`${this.apiUrl}/topic`);
  }

  PostTopic(postTopic: PostTopic): Observable<Topic> {
    return this.http.post<Topic>(`${this.apiUrl}/topic`, postTopic);
  }

  PutTopic(putTopic: PutTopic): Observable<Topic>{
    return this.http.put<Topic>(`${this.apiUrl}/topic`,putTopic)
  }
  DeleteTopic(id: number): Observable<unknown> {
    return this.http.delete(`${this.apiUrl}/topic/${id}`);
  }



}
