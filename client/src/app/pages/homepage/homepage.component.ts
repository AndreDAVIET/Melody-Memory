import { Component, OnInit } from '@angular/core';
import { Challenge } from 'src/app/shared/challenge';
import { ChallengeService } from '../../shared/challenge.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { AuthService } from 'src/app/shared/auth.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  challenges : Challenge [];
  disabledAdmin = true;

  constructor( 
    private challengeService : ChallengeService, 
    private router : Router,
    private userService : UserService,
    private authService : AuthService
    ) { }

  ngOnInit() {
    this.getChallenge();
    this.verificationRole();
  }

  getChallenge()
  {
    this.challenges = [];
    this.challenges = this.challengeService.getAll();
  }

  onClickedChallenge(challenge){
    const challengeId = challenge.id;
    this.router.navigate([`/${challengeId}/details`]);
  }

  onDeletedChallenge(challenge){
    this.challengeService.deletedChallenge(challenge);
  }


  verificationRole(){
    if ( this.userService.connectedUser.role == 'membre'){
      console.log("membre")
      this.disabledAdmin = false
    }
    else{
      console.log("admin")
      this.disabledAdmin = true
    }
  }

}
