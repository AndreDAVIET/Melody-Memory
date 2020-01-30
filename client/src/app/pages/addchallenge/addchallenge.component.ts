import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ChallengeService } from 'src/app/shared/challenge.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addchallenge',
  templateUrl: './addchallenge.component.html',
  styleUrls: ['./addchallenge.component.css']
})
export class AddchallengeComponent implements OnInit {


  addForm = this.formbuilder.group({
    name: ['',[Validators.required]],
    sequence: ['',[Validators.required]],
    melodie: ['',[Validators.required]],
  })

  constructor(
    private formbuilder : FormBuilder,
    private challengeService : ChallengeService,
    private router : Router,
  ) { }

  ngOnInit() {
  }

  addChallenge(){
    let newChallenge = {
      name : this.addForm.value.name,             
      sequence : this.addForm.value.sequence,     
      melodie : this.addForm.value.melodie,
      }
      this.challengeService.addChallenge(newChallenge).subscribe(
        result=>{
          console.log(result)
        }
      );  
      setTimeout( () => {this.router.navigateByUrl('/gamepage')}, 500)
  }

}
