import { Component, OnInit } from '@angular/core';
import { Challenge } from 'src/app/shared/challenge';
import { ActivatedRoute } from '@angular/router';
import { ChallengeService } from 'src/app/shared/challenge.service';
import { ChallengeReussiComponent } from 'src/app/component/challenge-reussi/challenge-reussi.component';
import { MatDialog } from '@angular/material';
import { ChallengePerduComponent } from 'src/app/component/challenge-perdu/challenge-perdu.component';
import { User } from 'src/app/shared/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-challenge-detail',
  templateUrl: './challenge-detail.component.html',
  styleUrls: ['./challenge-detail.component.css']
})
export class ChallengeDetailComponent implements OnInit {

  challengeToShow: Challenge;
  notePush = [];
  notePushJoin : string;
  noteplayed = [];
  test;
  connectedUser: User;

  constructor( 
    private route: ActivatedRoute, 
    private challengeService : ChallengeService,
    public dialog: MatDialog,
    ) { }

  ngOnInit() {
    this.getChallengeToShow(this.route.snapshot.params.challengeId);
  }

  getChallengeToShow(challengeId: number)
  {
    this.challengeService.selectedChallenge(challengeId).subscribe(result => {
      this.challengeToShow = result;
    });
  }

  resetSequence(){
    this.notePush = [];
    console.log(this.notePush)
  }

  verificationSequence(){
    console.log(this.challengeToShow.sequence);
    this.notePushJoin = this.notePush.join('');
    console.log(this.notePushJoin)
    if ( this.notePushJoin == this.challengeToShow.sequence){
      this.dialog.open(ChallengeReussiComponent)
    }
    else{
      this.dialog.open(ChallengePerduComponent)
    }
    this.notePush = [];

  }

  pushDO(){
    this.notePush.push('do')
    this.challengeService.myDo.play();
  }
  pushRE(){
    this.notePush.push('re')
    this.challengeService.myRe.play();
  }
  pushMI(){
    this.notePush.push('mi')
    this.challengeService.myMi.play();
  }
  pushFA(){
    this.notePush.push('fa')
    this.challengeService.myFa.play();
  }
  pushSOL(){
    this.notePush.push('sol')
    this.challengeService.mySol.play();
  }
  pushLA(){
    this.notePush.push('la')
    this.challengeService.myLa.play();
  }
  pushSI(){
    this.notePush.push('si')
    this.challengeService.mySi.play();
  }

  private sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async notePlayed(){
    this.test =  this.challengeToShow.melodie.split(' ');
    console.log(this.test)
    for ( let i = 0; i < this.test.length; i++){
      if (this.test[i] == 'do'){
        this.challengeService.myDo.play();
        await this.sleep(500);
      }
      if (this.test[i] == 're'){
        this.challengeService.myRe.play();
        await this.sleep(500);
      }
      if (this.test[i] == 'mi'){
        this.challengeService.myMi.play();
        await this.sleep(500);
      }
      if (this.test[i] == 'fa'){
        this.challengeService.myFa.play();
        await this.sleep(500);
      }
      if (this.test[i] == 'sol'){
        this.challengeService.mySol.play();
        await this.sleep(500);
      }
      if (this.test[i] == 'la'){
        this.challengeService.myLa.play();
        await this.sleep(500);
      }
      if (this.test[i] == 'si'){
        this.challengeService.mySi.play();
        await this.sleep(500);
      }
     
    }
  }

}



