import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appActions } from 'src/app/shared/store';
import { AppState, State } from 'src/app/shared/store/app.state';
import { Player } from '../player.model';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  players$: Observable<Player[]> = this.store.select(store => store.game.players)
  playerColumns: string[] = ["name", "setsWon", "matchesWon", "id"]

  ngOnInit(): void {
  }

  deletePlayer(id: string) {
    this.store.dispatch(appActions.deletePlayer({ id }))
  }

}
