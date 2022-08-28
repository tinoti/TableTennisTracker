import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectPlayer } from 'src/app/shared/store/app.selectors';
import { AppState } from 'src/app/shared/store/app.state';
import { Player } from '../player.model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { appActions } from 'src/app/shared/store';
import { Match } from 'src/app/match/match.model';


@UntilDestroy()
@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {

  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute) { }

  selectedPlayer$: Observable<Player> = this.store.select(selectPlayer)
  recentlyPlayedMatches$: Observable<Match[]> = this.store.select(store => store.game.recentlyPlayedMatches)
  players$: Observable<Player[]> = this.store.select(store => store.game.players)

  matchColumns: string[] = ["playerOne", "vs", "playerTwo"]


  ngOnInit(): void {
    this.activatedRoute.queryParams.pipe(untilDestroyed(this)).subscribe((params: any) => {
      // We need to update two parameters in the state, the selected player and the recent matches that they played. 
      // We could also use ngrx effects to call the second action once the first one is done.
      this.store.dispatch(appActions.selectPlayer({ id: params.id }))
      this.store.dispatch(appActions.selectRecentlyPlayedMatches({ playerId: params.id }))
    })
  }

  playerName(playerId: string, players: Player[]){
    return players.find(o => o.id === playerId)?.name
  }

}
