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
  challengeToShow : Challenge;
  difficultyToShow : boolean = true;

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


  selectedArmy(challenge)
  {
    this.challengeToShow = challenge;
    return this.challengeToShow;
  }

  selectedDifficulty(difficultyEasy){
    this.difficultyToShow = difficultyEasy;
    return this.difficultyToShow;
  }


  deletedChallenge(challengeToShow){
    console.log(challengeToShow.id)
      this.http.delete<Challenge>(`${this.baseUrl}/challenge/${challengeToShow.id}`).subscribe(result => result);
  }

  modifyChallenge(challengeToShow){
    console.log(challengeToShow.id)
    this.http.put<Challenge>(`${this.baseUrl}/challenge/${challengeToShow.id}`, challengeToShow ).subscribe(result => result)
  }

  addChallenge(challenge): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/challenge`, challenge);
  };

  returnDifficulty(){
    
  }

}
