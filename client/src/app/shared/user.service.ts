import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string =  "http://localhost:3000";

  connectedUser: User;
  offline: boolean = true;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    if (this.authService.getToken()) {
      this.loadUser().subscribe(result => {
        this.connectedUser = result;
        this.offline = false;
      });
    }
  }

  /**
   * Load the user from the api. Store it in the user service.
   */
  loadUser(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/me`)
      .pipe(
        tap(result => {
          this.connectedUser = this.connectedUser;
        })
      );
  }

  addUser(user): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/auth/register`, user);
  };

  disconnectedUser(){
    this.connectedUser =  undefined;
    this.offline= true;
  }


};

