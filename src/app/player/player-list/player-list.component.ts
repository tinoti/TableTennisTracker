import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.store';
import { Player } from '../player.model';
import { playerActions } from '../store';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  players$: Observable<Player[]> = this.store.select(state => state.player.players)
  playerColumns: string[] = ["name", "setsWon", "matchesWon", "id"]

  ngOnInit(): void {
  }

  deletePlayer(id: string) {
    this.store.dispatch(playerActions.deletePlayer({ id }))
  }

}
