import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ChallengeService } from 'src/app/shared/challenge.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  userForm = this.formbuilder.group({
    pseudo: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })

  loginForm = this.formbuilder.group({
    pseudo: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });


  constructor(
    private formbuilder : FormBuilder, 
    private userService : UserService, 
    private router : Router, 
    private authService : AuthService) { }

  ngOnInit() {
  }

  inscriptionUser(){
    let newUser = {
      pseudo : this.userForm.value.pseudo,             
      password : this.userForm.value.password,     
      role : 'membre', 
      }
      this.userService.addUser(newUser).subscribe(
        result=>{
          console.log(result)
        }
      );  
      setTimeout( () => {this.router.navigateByUrl('')}, 500)
  }

  login() {
    const pseudo = this.loginForm.value.pseudo;
    const password = this.loginForm.value.password;
    console.log(pseudo),
    console.log(password)

    this.authService.login(pseudo, password)
      .subscribe(
          results => {
          // success callback
          // load connected user profile and redirect to the list of posts
          this.userService.loadUser().subscribe(result => {
            this.router.navigateByUrl('gamepage');
          })
        },
        error => {
          // error callback
          // display error messages
        }
      );
  }

}
