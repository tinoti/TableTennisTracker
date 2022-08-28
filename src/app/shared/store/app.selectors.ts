import { createSelector } from '@ngrx/store';
import { Match } from 'src/app/match/match.model';
import { Player } from 'src/app/player/player.model';
import { AppState } from './app.state';

const matches = (state: AppState) => state.game.matches
const selectedMatchId = (state: AppState) => state.game.selectedMatchId
const players = (state: AppState) => state.game.players
const selectedPlayerId = (state: AppState) => state.game.selectedPlayerId

export const selectMatch = createSelector(
  matches,
  selectedMatchId,
  (matches: Match[], selectedMatchId: string) => {
    return matches.find(o => o.id === selectedMatchId) as Match
  }
)

export const selectPlayer = createSelector(
  players,
  selectedPlayerId,
  (players: Player[], selectedPlayerId: string) => {
    return players.find(o => o.id === selectedPlayerId) as Player
  }
)