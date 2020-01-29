import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ChallengeDetailComponent } from './pages/challenge-detail/challenge-detail.component';
import { FormulaireComponent } from './pages/formulaire/formulaire.component';


const routes: Routes = [
  { path : '', component : HomepageComponent},
  { path: ':challengeId/details', component : ChallengeDetailComponent },
  { path: 'formulaire', component : FormulaireComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
