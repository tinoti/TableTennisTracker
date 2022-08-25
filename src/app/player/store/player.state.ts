import { Player } from "../player.model";

export interface State {
    players: Player[]
}

export const initialState: State = {
    players: []
}