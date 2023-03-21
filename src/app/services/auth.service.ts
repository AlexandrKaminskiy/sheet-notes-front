import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<Response> {
    return this.http.post<Response>('http://localhost:3000/login', {username, password} )
  }

  register(username: string, email: string, password: string): Observable<Response> {
    return this.http.post<Response>('http://localhost:3000/register', {username, email, password} )
  }
}
