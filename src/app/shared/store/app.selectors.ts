import { createSelector } from '@ngrx/store';
import { Match } from 'src/app/match/match.model';
import { AppState } from './app.state';

const matches = (state: AppState) => state.game.matches
const selectedMatchId = (state: AppState) => state.game.selectedMatchId
 
export const selectMatch = createSelector(
    matches,
    selectedMatchId,
    (matches: Match[], selectedMatchId: string) => {
    return matches.find(o => o.id === selectedMatchId) as Match
  }
);