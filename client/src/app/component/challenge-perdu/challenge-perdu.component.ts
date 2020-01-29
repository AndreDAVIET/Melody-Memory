import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-challenge-perdu',
  templateUrl: './challenge-perdu.component.html',
  styleUrls: ['./challenge-perdu.component.css']
})
export class ChallengePerduComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ChallengePerduComponent>, private router : Router) { }

  ngOnInit() {
  }

  close()
  {
    this.dialogRef.close();
  }

}
