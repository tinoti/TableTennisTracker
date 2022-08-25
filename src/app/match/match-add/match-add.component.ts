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
  playerOne: string = ""
  playerTwo: string = ""

  ngOnInit(): void {
  }

  clearPlayerOne(event: any) {
    this.playerOne = ""
    event.stopPropagation()
  }

  clearPlayerTwo(event: any) {
    this.playerTwo = ""
    event.stopPropagation()
  }

  change(event: any) {
    console.log(event)
  }

}
