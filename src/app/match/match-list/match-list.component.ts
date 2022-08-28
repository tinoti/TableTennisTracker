import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Player } from 'src/app/player/player.model';
import { AppState } from 'src/app/shared/store/app.state';
import { Match } from '../match.model';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  matches$: Observable<Match[]> = this.store.select(store => store.game.matches)
  players$: Observable<Player[]> = this.store.select(store => store.game.players)
  matchColumns: string[] = ["playerOne", "vs", "playerTwo"]

  deleteMatch(id: string) {

  }

  playerName(playerId: string, players: Player[]){
    return players.find(o => o.id === playerId)?.name
  }

  ngOnInit(): void {
  }

}
