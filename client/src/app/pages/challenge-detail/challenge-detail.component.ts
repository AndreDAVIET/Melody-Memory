import { Component, OnInit, HostListener } from '@angular/core';
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
  astuceFind :number = 0;
  MusiqueLaunch : boolean = true;
  astuceATrouver : boolean = false;
  difficultyToShow : boolean;
  challengeId : number;
  userId : number;
  easterEgg :string = "";

  constructor( 
    private route: ActivatedRoute, 
    private challengeService : ChallengeService,
    public dialog: MatDialog,
    private userService :UserService,

    ) { }

  ngOnInit() {
    this.getChallengeToShow(this.route.snapshot.params.challengeId);
    this.difficultyToShow = this.challengeService.difficultyToShow;
    this.userService.loadUser().subscribe((result)  => {
      this.connectedUser = result;});
  }

  getChallengeToShow(challengeId: number)
  {
    this.challengeService.selectedChallenge(challengeId).subscribe(result => {
      this.challengeToShow = result;;
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
      this.challengeId = this.challengeToShow.id;
      this.userId = this.connectedUser.id;
      console.log(this.challengeId);
      console.log(this.userId);
      this.challengeService.getStatusOK(this.challengeId, this.userId)
    }
    else{
      this.dialog.open(ChallengePerduComponent)
      console.log(this.challengeToShow)
      console.log(this.connectedUser)
    }
    this.notePush = [];

  }

  pushDO(){
    this.notePush.push('do')
    if (this.difficultyToShow == true){
      if ( this.easterEgg == "charles"){
        this.challengeService.myPetDo.play();
      }
      else{
        this.challengeService.myDo.play();
      }
    }
    else{
      return
    }
  }
  pushRE(){
    this.notePush.push('re')
    if (this.difficultyToShow == true){
      if ( this.easterEgg == "charles"){
        this.challengeService.myPetRe.play();
      }
      else{
      this.challengeService.myRe.play();
      }
    }
    else{
      return
    }
  }
  pushMI(){
    this.notePush.push('mi')
    if (this.difficultyToShow == true){
      if ( this.easterEgg == "charles"){
        this.challengeService.myPetMi.play();
      }
      else{
      this.challengeService.myMi.play();
      }
    }
    else{
      return
    }
  }
  pushFA(){
    this.notePush.push('fa')
    if (this.difficultyToShow == true){
      if ( this.easterEgg == "charles"){
        this.challengeService.myPetFa.play();
      }
      else{
      this.challengeService.myFa.play();
      }
    }
    else{
      return
    }
  }
  pushSOL(){
    this.notePush.push('sol')
    if (this.difficultyToShow == true){
      if ( this.easterEgg == "charles"){
        this.challengeService.myPetSol.play();
      }
      else{
      this.challengeService.mySol.play();
      }
    }
    else{
      return
    }
  }
  pushLA(){
    this.notePush.push('la')
    if (this.difficultyToShow == true){
      if ( this.easterEgg == "charles"){
        this.challengeService.myPetLa.play();
      }
      else{
      this.challengeService.myLa.play();
      }
    }
    else{
      return
    }
  }
  pushSI(){
    this.notePush.push('si')
    if (this.difficultyToShow == true){
      if ( this.easterEgg == "charles"){
        this.challengeService.myPetSi.play();
      }
      else{
      this.challengeService.mySi.play();
      }
    }
    else{
      return
    }
  }

  private sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async notePlayed(){
    this.test =  this.challengeToShow.melodie.split(' ');
    console.log(this.test)
    this.MusiqueLaunch = !this.MusiqueLaunch;
      for ( let i = 0; i < this.test.length; i++){
        if (this.test[i] == 'do'){
          if ( this.easterEgg == 'charles'){
            console.log(i)
            this.challengeService.myPetDo.play();
            await this.sleep(650);
            this.astuceFind = this.astuceFind +1
          }
          else{
            console.log(i)
            this.challengeService.myDo.play();
            await this.sleep(650);
            this.astuceFind = this.astuceFind +1
          }
        }
        if (this.test[i] == 're'){
          if ( this.easterEgg == 'charles'){
            console.log(i)
            this.challengeService.myPetRe.play();
            await this.sleep(650);
            this.astuceFind = this.astuceFind +1
          }
          else{
            console.log(i)
            this.challengeService.myRe.play();
            await this.sleep(650);
            this.astuceFind = this.astuceFind +1
          }
        }
        if (this.test[i] == 'mi'){
          if ( this.easterEgg == 'charles'){
            console.log(i)
            this.challengeService.myPetMi.play();
            await this.sleep(650);
            this.astuceFind = this.astuceFind +1
          }
          else{
            console.log(i)
            this.challengeService.myMi.play();
            await this.sleep(650);
            this.astuceFind = this.astuceFind +1
          }
        }
        if (this.test[i] == 'fa'){
          if ( this.easterEgg == 'charles'){
            console.log(i)
            this.challengeService.myPetFa.play();
            await this.sleep(650);
            this.astuceFind = this.astuceFind +1
          }
          else{
            console.log(i)
            this.challengeService.myFa.play();
            await this.sleep(650);
            this.astuceFind = this.astuceFind +1
          }
        }
        if (this.test[i] == 'sol'){
          if ( this.easterEgg == 'charles'){
            console.log(i)
            this.challengeService.myPetSol.play();
            await this.sleep(650);
            this.astuceFind = this.astuceFind +1
          }
          else{
            console.log(i)
            this.challengeService.mySol.play();
            await this.sleep(650);
            this.astuceFind = this.astuceFind +1
          }
        }
        if (this.test[i] == 'la'){
          if ( this.easterEgg == 'charles'){
            console.log(i)
            this.challengeService.myPetLa.play();
            await this.sleep(650);
            this.astuceFind = this.astuceFind +1
          }
          else{
            console.log(i)
            this.challengeService.myLa.play();
            await this.sleep(650);
            this.astuceFind = this.astuceFind +1
          }
        }
        if (this.test[i] == 'si'){
          if ( this.easterEgg == 'charles'){
            console.log(i)
            this.challengeService.myPetSi.play();
            await this.sleep(650);
            this.astuceFind = this.astuceFind +1
          }
          else{
          console.log(i)
          this.challengeService.mySi.play();
          await this.sleep(650);
          this.astuceFind = this.astuceFind +1
          }
        }
      }
    
  }

  disabledAstuce(){
    this.astuceATrouver = true
  }

  @HostListener('document:keyup', ['$event'])
      onKeyupHandler(event: KeyboardEvent) {
        if( this.easterEgg.length < 7){
          if (event.code === 'KeyC') {
            this.easterEgg = this.easterEgg + "c"
            console.log(this.easterEgg)
          }
          if (event.code === 'KeyH') {
            this.easterEgg = this.easterEgg + "h"
            console.log(this.easterEgg)
          }
          if (event.code === 'KeyQ') {
            this.easterEgg = this.easterEgg + "a"
            console.log(this.easterEgg)
          }
          if (event.code === 'KeyR') {
            this.easterEgg = this.easterEgg + "r"
            console.log(this.easterEgg)
          }
          if (event.code === 'KeyL') {
            this.easterEgg = this.easterEgg + "l"
            console.log(this.easterEgg)
          }
          if (event.code === 'KeyE') {
            this.easterEgg = this.easterEgg + "e"
            console.log(this.easterEgg)
          }
          if (event.code === 'KeyS') {
            this.easterEgg = this.easterEgg + "s"
            console.log(this.easterEgg)
          }
        }
        else{
            this.easterEgg = "";
            }       
      }
}


