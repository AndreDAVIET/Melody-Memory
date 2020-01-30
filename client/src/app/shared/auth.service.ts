import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = "http://localhost:3000";
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private router: Router) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}

  /**
   * Make the api call for the authentification.
   * Store credentials (token and pseudo) into localstorage.
   * @param pseudo user pseudo
   * @param password user password
   */
  login(pseudo: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, {
      pseudo,
      password
    }).pipe(
      tap(results => {
        if (results) {
          this.storeCredentials(results);
        }
      })
    );
  }

  /**
   * Remove token and pseudo from localstorage.
   */
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('pseudo');
    this.router.navigateByUrl('');
  }

  /**
   * Return token from local storage
   */
  getToken(): string {
    return localStorage.getItem('token');
  }

  /**
   * Store credentials in the browser local storage.
   * @param credentials javascript object which contain token and pseudo
   */
  private storeCredentials(credentials) {
    if (credentials.token) {
      localStorage.setItem('token', credentials.token);
    }

    if (credentials.pseudo) {
      localStorage.setItem('pseudo', credentials.pseudo);
    }
    if (credentials.role) {
      localStorage.setItem('role', credentials.role);
    }
  }
}
