import { Component, OnInit } from '@angular/core';
import { ChallengeService } from 'src/app/shared/challenge.service';
import { Challenge } from 'src/app/shared/challenge';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletechallenge',
  templateUrl: './deletechallenge.component.html',
  styleUrls: ['./deletechallenge.component.css']
})
export class DeletechallengeComponent implements OnInit {

  challengeToShow : Challenge;

  constructor(
    private challengeService : ChallengeService,
    private router : Router
  ) { }

  ngOnInit() {
    this.challengeToShow = this.challengeService.challengeToShow;
    console.log(this.challengeToShow)
  }

  onDeletedChallenge(challengeToShow){
    console.log(challengeToShow)
    this.challengeService.deletedChallenge(challengeToShow);
    setTimeout( () => {this.router.navigateByUrl('/gamepage')}, 500)
  }

}
