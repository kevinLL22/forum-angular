
import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrZXZpbkBnbWFpbC5jb20iLCJpc3MiOiJmb3J1bSBhcGkiLCJpZCI6MSwiZXhwIjoxNjg1NjU3MjgzfQ.Xf589bAvZpSrQWmGkyLstdkGAZVzSxQGcVXg4vHcePQ';
    req = req.clone({
      headers:req.headers.set('Authorization','Bearer '+token)
      }
    )
    return next.handle(req);
  }
}

