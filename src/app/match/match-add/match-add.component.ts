import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Player } from 'src/app/player/player.model';
import { appActions } from 'src/app/shared/store';
import { AppState } from 'src/app/shared/store/app.state';

@Component({
  selector: 'app-match-add',
  templateUrl: './match-add.component.html',
  styleUrls: ['./match-add.component.css']
})
export class MatchAddComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  players$: Observable<Player[]> = this.store.select(state => state.game.players)
  playerOne: Player = new Player("", "", 0, 0)
  playerTwo: Player = new Player("", "", 0, 0)

  sets: Array<Array<number>> = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]

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

  postMatch() {
    this.store.dispatch(appActions.postMatch({ playerOneId: this.playerOne.id, playerTwoId: this.playerTwo.id, sets: this.sets }))
  }

  resetForm(){
    this.sets = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
    this.playerOne = new Player("", "", 0, 0)
    this.playerTwo = new Player("", "", 0, 0)
  }

}
