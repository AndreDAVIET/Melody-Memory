import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:3000";
  offline: boolean = true;
  connectedUser: User;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    if (this.authService.getToken()) {
      this.loadUser().subscribe(result => {
        this.connectedUser = result;
        console.log("Connected user", this.connectedUser);
      });
    }
  }

  /**
   * Load the user from the api. Store it in the user service.
   */
  loadUser(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/me`)
      .pipe(
        tap(result => {
          this.connectedUser = this.connectedUser;
        })
      );
  }

  addUser(user): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/auth/register`, user);
  };
};

