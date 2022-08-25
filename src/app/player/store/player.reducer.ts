// Here is the business logic for the player state. I've separated each reducer into a separate function for readability. Creating the reducer itself and assigning functions
// to certain actions is on the bottom of the file

import { createReducer, on } from "@ngrx/store";
import { playerState, playerActions } from ".";
import { Player } from "../player.model";
import { v4 as uuidv4 } from 'uuid';


const postPlayer = (state: playerState.State, name: string) => {
    // Create new player
    const player = new Player(name, uuidv4(), 0, 0)

    // Add to state
    return {
        ...state,
        players: [...state.players, player]
    }

}


const deletePlayer = (state: playerState.State, id: string) => {

    return {
        ...state,
        players: state.players.filter(o => o.id != id) // Remove the player from the array.
    }
}



export const playerReducer = createReducer(
    playerState.initialState,
    on(playerActions.postPlayer, (state, { name }) => { return postPlayer(state, name) }),
    on(playerActions.deletePlayer, (state, { id }) => { return deletePlayer(state, id)})
)
