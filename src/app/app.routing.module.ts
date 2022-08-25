import { RouterModule, Routes } from '@angular/router';
import { MatchComponent } from './match/match.component';
import { PlayerComponent } from './player/player.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/players', pathMatch: 'full' },
  { path: "players", component: PlayerComponent},
  { path: "matches", component: MatchComponent}

];

export const appRoutingModule = RouterModule.forRoot(appRoutes, {
  useHash: true
});