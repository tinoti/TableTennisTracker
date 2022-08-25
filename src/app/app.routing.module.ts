import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './player/player.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/players', pathMatch: 'full' },
  { path: "players", component: PlayerComponent}

];

export const appRoutingModule = RouterModule.forRoot(appRoutes, {
  useHash: true
});