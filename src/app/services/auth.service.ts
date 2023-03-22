import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private token = 1

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) {
  }

  login(username: string, password: string) {
    this.http.post<string>('http://localhost:3000/login', {username, password},
      {withCredentials: true})
      .subscribe((response) => {
        localStorage.setItem('auth', response)
        this.router.navigate(['/'])
      })
  }

  register(username: string, email: string, password: string) {
    this.http.post<Response>('http://localhost:3000/register', {username, email, password})
      .subscribe(response => {
        console.log(response);
      })
  }

  logout() {
    localStorage.clear()
    this.http.put<Response>('http://localhost:3000/logout', {}, {withCredentials: true}).subscribe()
    this.router.navigate(['login'])
  }

  isAuthenticated(): boolean  {
    let item = localStorage.getItem('auth');
    console.log(item)
    return !!item;
  }


  isAuth() {
    console.log(++this.token);
  }
}
