
import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})

export class TokenInterceptorService implements HttpInterceptor{

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("la url es:"+req.url)
    if (req.url == 'http://localhost:8080/login'){
      return next.handle(req);
    }
    else {
      let token=this.authService.getToken();
      //let token = '';
      req = req.clone({
          headers:req.headers.set('Authorization','Bearer '+token)
        }
      )
      return next.handle(req);
    }

  }
}

