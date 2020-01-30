import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService : AuthService,
    private userService : UserService,
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.userService.disconnectedUser();
  }

}
