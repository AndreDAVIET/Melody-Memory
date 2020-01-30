import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  connectedUser : User;

  constructor(
    private authService : AuthService,
    private userService : UserService,
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.userService.disconnectedUser();
    this.userService.buttonLog = false;
  }

}
