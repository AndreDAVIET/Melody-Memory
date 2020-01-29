import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = "http://localhost:3000";

  constructor(
    private http : HttpClient,
    private router: Router
  ) { }

  login(pseudo: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, {
      pseudo,
      password
    }).pipe( tap(results => {
        if (results) {
          this.storeCredentials(results);
          console.log(results)
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('pseudo');
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  private storeCredentials(credentials) {
    if (credentials.token) {
      localStorage.setItem('token', credentials.token);
      console.log(localStorage)
    }

    if (credentials.pseudo) {
      localStorage.setItem('pseudo', credentials.pseudo);
      console.log(localStorage)
    }
  }
}
