import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './shared/angularMaterial.module';
import { FormsModule } from '@angular/forms';
import { appRoutingModule } from './app.routing.module';
import { StoreModule } from '@ngrx/store';
import { LetModule } from '@ngrx/component';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerComponent } from './player/player.component';
import { MatchComponent } from './match/match.component';
import { PlayerAddComponent } from './player/player-add/player-add.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerDetailsComponent } from './player/player-details/player-details.component';
import { MatchAddComponent } from './match/match-add/match-add.component';
import { MatchListComponent } from './match/match-list/match-list.component';
import { MatchDetailsComponent } from './match/match-details/match-details.component';
import { MutuallyExclusivePlayerSelectPipe } from './shared/pipes/mutuallyExclusivePlayerSelect.pipe';
import { SetScoringValidatorDirective } from './shared/directives/setScoringValidator.directive';
import { appReducer } from './shared/store/app.reducers';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    MatchComponent,
    PlayerAddComponent,
    PlayerListComponent,
    PlayerDetailsComponent,
    MatchAddComponent,
    MatchListComponent,
    MatchDetailsComponent,
    MutuallyExclusivePlayerSelectPipe,
    SetScoringValidatorDirective
  ],
  imports: [
    StoreModule.forRoot({ game: appReducer }),
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    appRoutingModule,
    LetModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SetScoringValidatorDirective]
})
export class AppModule { }


