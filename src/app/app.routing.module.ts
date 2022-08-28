import { RouterModule, Routes } from '@angular/router';
import { MatchDetailsComponent } from './match/match-details/match-details.component';
import { MatchComponent } from './match/match.component';
import { PlayerComponent } from './player/player.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/players', pathMatch: 'full' },
  { path: "players", component: PlayerComponent},
  { path: "matches", component: MatchComponent},
  { path: "match-details", component: MatchDetailsComponent}

];

export const appRoutingModule = RouterModule.forRoot(appRoutes, {
  useHash: true
});