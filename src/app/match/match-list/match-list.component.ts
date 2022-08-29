import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Player } from 'src/app/player/player.model';
import { appActions } from 'src/app/shared/store';
import { AppState } from 'src/app/shared/store/app.state';
import { Match } from '../match.model';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent {

  constructor(private store: Store<AppState>) { }

  matches$: Observable<Match[]> = this.store.select(store => store.game.matches)
  players$: Observable<Player[]> = this.store.select(store => store.game.players)
  matchColumns: string[] = ["playerOne", "vs", "playerTwo", "id"]

  deleteMatch(id: string) {
    this.store.dispatch(appActions.deleteMatch({ id }))
  }

  playerName(playerId: string, players: Player[]) {
    return players.find(o => o.id === playerId)?.name
  }

}
