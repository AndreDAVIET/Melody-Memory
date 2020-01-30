import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-inscription-ok',
  templateUrl: './inscription-ok.component.html',
  styleUrls: ['./inscription-ok.component.css']
})
export class InscriptionOKComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InscriptionOKComponent>,
  ) { }

  ngOnInit() {
  }

  close()
  {
    this.dialogRef.close();
  }

}
