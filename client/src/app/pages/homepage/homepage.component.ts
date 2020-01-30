import { Component, OnInit } from '@angular/core';
import { Challenge } from 'src/app/shared/challenge';
import { ChallengeService } from '../../shared/challenge.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { AuthService } from 'src/app/shared/auth.service';
import { User } from 'src/app/shared/user';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  challenges : Challenge [];
  disabledAdmin = true;
  connectedUser: User;
  difficultyEasy :boolean = true;
  scoreUser  ;
  score ;

  constructor( 
    private challengeService : ChallengeService, 
    private router : Router,
    private userService : UserService,
    private authService : AuthService
    ) { }

  ngOnInit() {
    this.userService.loadUser().subscribe((result)  => {
      this.connectedUser = result;
      this.verificationRole();
      console.log(this.connectedUser)
      this.getReturnScore()
    });
      
    this.getChallenge();
    this.difficultyEasy = this.challengeService.difficultyToShow;
    
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

  onModifyChallenge(challenge){
    this.challengeService.selectedArmy(challenge);
    this.router.navigate([`/modify`]);
  }

  onDeleteChallenge(challenge){
    this.challengeService.selectedArmy(challenge);
    this.router.navigate([`/delete`]);
  }

  verificationRole(){
    if ( this.connectedUser.role == 'membre'){
      console.log("membre")
      this.disabledAdmin = false
    }
    else{
      console.log("admin")
      this.disabledAdmin = true
    }
  }

  getDifficulty(){
    this.difficultyEasy =! this.difficultyEasy;
    this.challengeService.selectedDifficulty(this.difficultyEasy);
    }

  getReturnScore(){
    this.challengeService.returnScore(this.connectedUser).subscribe(result => {
      this.score = result;
      this.scoreUser = this.score[0]
      console.log(this.scoreUser)
    });
    
  }

}


