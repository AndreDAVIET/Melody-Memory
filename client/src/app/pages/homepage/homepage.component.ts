import { Component, OnInit } from '@angular/core';
import { Challenge } from 'src/app/shared/challenge';
import { ChallengeService } from '../../shared/challenge.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  challenges : Challenge [];

  constructor( 
    private challengeService : ChallengeService, 
    private router : Router,
    private userService : UserService
    ) { }

  ngOnInit() {
    this.getChallenge();
    
  }

  getChallenge()
  {
    this.challenges = [];
    this.challenges = this.challengeService.getAll();
    console.log(this.challenges)
  }

  onClickedChallenge(challenge){
    const challengeId = challenge.id;
    this.router.navigate([`/${challengeId}/details`]);
  }

  onDeletedChallenge(challenge){
    this.challengeService.deletedChallenge(challenge);
  }

  onModeDifficile(){

  }

}
