import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Challenge } from '../shared/challenge';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  searchedChallenge: Challenge[] = [];
  private baseUrl = "http://localhost:3000";
  myDo = new Audio(`../../assets/do.mp3`);
  myRe = new Audio(`../../assets/re.mp3`);
  myMi = new Audio(`../../assets/mi.mp3`);
  myFa = new Audio(`../../assets/fa.mp3`);
  mySol = new Audio(`../../assets/sol.mp3`);
  myLa = new Audio(`../../assets/la.mp3`);
  mySi = new Audio(`../../assets/si.mp3`);

  

  constructor(private http: HttpClient) { }

  getAll()
  {
    this.searchedChallenge = [];
    this.http.get<Challenge[]>(`${this.baseUrl}/challenge`).subscribe(result => result.forEach(
      value => this.searchedChallenge.push(value)
    ));   
    return this.searchedChallenge;

  }

  selectedChallenge(challengeId: number)
  {
    return this.http.get<Challenge>(`${this.baseUrl}/challenge/${challengeId}`);

  }

  deletedChallenge(challenge){
    console.log(challenge.id)
      this.http.delete<Challenge>(`${this.baseUrl}/challenge/${challenge.id}`).subscribe(result => result);
  }

}
