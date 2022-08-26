import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.store';
import { Player } from 'src/app/player/player.model';

@Component({
  selector: 'app-match-add',
  templateUrl: './match-add.component.html',
  styleUrls: ['./match-add.component.css']
})
export class MatchAddComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  players$: Observable<Player[]> = this.store.select( state => state.player.players)
  playerOne: Player = new Player("", "", 0, 0)
  playerTwo: Player = new Player("", "", 0, 0)

  sets: Array<any> = [[7,11], [8,11],[14,12]]

  ngOnInit(): void {
  }

  clearPlayerOne(event: any) {
    this.playerOne = new Player("", "", 0, 0)
    event.stopPropagation()
  }

  clearPlayerTwo(event: any) {
    this.playerTwo = new Player("", "", 0, 0)
    event.stopPropagation()
  }

}
