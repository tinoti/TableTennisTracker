import { Match } from "src/app/match/match.model";
import { Player } from "src/app/player/player.model";

export interface AppState {
    game: State
}

export interface State {
    players: Player[],
    matches: Match[],
    selectedMatchId: string,
    selectedPlayerId: string,
    recentlyPlayedMatches: Match[]
}

export const initialState: State = {
    players: [],
    matches: [],
    selectedMatchId: "",
    selectedPlayerId: "",
    recentlyPlayedMatches: []
}