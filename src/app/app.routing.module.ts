import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatchDetailsComponent } from './match/match-details/match-details.component';
import { MatchComponent } from './match/match.component';
import { PlayerDetailsComponent } from './player/player-details/player-details.component';
import { PlayerComponent } from './player/player.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "players", component: PlayerComponent },
  { path: "matches", component: MatchComponent },
  { path: "match-details", component: MatchDetailsComponent },
  { path: "player-details", component: PlayerDetailsComponent }

];

export const appRoutingModule = RouterModule.forRoot(appRoutes, {
  useHash: true
});