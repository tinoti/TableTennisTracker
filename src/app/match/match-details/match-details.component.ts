import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Player } from 'src/app/player/player.model';
import { appActions } from 'src/app/shared/store';
import { AppState } from 'src/app/shared/store/app.state';
import { Match } from '../match.model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { selectMatch } from 'src/app/shared/store/app.selectors';

@UntilDestroy()
@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {

  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute) { }

  players$: Observable<Player[]> = this.store.select(store => store.game.players)
  matches$: Observable<Match[]> = this.store.select(store => store.game.matches)

  // Using selector so we can always have the latest state in the selected match
  selectedMatch$: Observable<Match> = this.store.select(selectMatch)


  //Using until destroy to unsubscribe
  ngOnInit(): void {
    this.activatedRoute.queryParams.pipe(untilDestroyed(this)).subscribe((params: any) => {
      this.store.dispatch(appActions.selectMatch({ id: params.id }))
    })
  }


  playerName(playerId: string, players: Player[]){
    return players.find(o => o.id === playerId)?.name
  }

}
