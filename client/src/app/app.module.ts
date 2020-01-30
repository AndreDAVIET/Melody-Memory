import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChallengeDetailComponent } from './pages/challenge-detail/challenge-detail.component';
import { ChallengeReussiComponent } from './component/challenge-reussi/challenge-reussi.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ChallengePerduComponent } from './component/challenge-perdu/challenge-perdu.component';
import { FormulaireComponent } from './pages/formulaire/formulaire.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthInterceptor } from './shared/auth-interceptor';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    ChallengeDetailComponent,
    ChallengeReussiComponent,
    ChallengePerduComponent,
    FormulaireComponent,
    LandingpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ ChallengeReussiComponent, ChallengePerduComponent],
})
export class AppModule { }
