import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-challenge-reussi',
  templateUrl: './challenge-reussi.component.html',
  styleUrls: ['./challenge-reussi.component.css']
})
export class ChallengeReussiComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ChallengeReussiComponent>, private router : Router) { }

  ngOnInit() {
  }

  close()
  {
    this.dialogRef.close();
    this.router.navigateByUrl('/gamepage')
  }

}
