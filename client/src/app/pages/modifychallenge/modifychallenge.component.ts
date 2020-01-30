import { Component, OnInit } from '@angular/core';
import { ChallengeService } from 'src/app/shared/challenge.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Challenge } from 'src/app/shared/challenge';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifychallenge',
  templateUrl: './modifychallenge.component.html',
  styleUrls: ['./modifychallenge.component.css']
})
export class ModifychallengeComponent implements OnInit {

  challengeToShow : Challenge;

  modifyForm = this.formbuilder.group({
    name: [''],
    sequence: [''],
    melodie: [''],
  })

  constructor(
    private challengeService : ChallengeService,
    private formbuilder : FormBuilder,
    private router : Router
  ) { }

  ngOnInit() {
    this.challengeToShow = this.challengeService.challengeToShow;
    console.log(this.challengeToShow)
  }

  modifyChallenge(challengeToShow){
    this.challengeService.modifyChallenge(challengeToShow);
    setTimeout( () => {this.router.navigateByUrl('/gamepage')}, 500)
  }

  


}
