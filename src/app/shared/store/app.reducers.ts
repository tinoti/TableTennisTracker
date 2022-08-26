// Here is the business logic for the match state. I've separated each reducer into a separate function for readability. Creating the reducer itself and assigning functions
// to certain actions is on the bottom of the file

import { createReducer, on } from "@ngrx/store";
import { appActions, appState } from ".";
import { v4 as uuidv4 } from 'uuid';
import { Player } from "src/app/player/player.model";


const postMatch = (state: appState.State, playerOneId: string, playerTwoId: string, sets: Array<Array<number>>) => {
    console.log(playerOneId)
    console.log(playerTwoId)
    console.log(sets)



    // Loop through each set, add sets won to corresponding player and calculate the winner of the match
    sets.forEach(set => {
        set[0] > set[1]
    })

    // Add to state
    return {
        ...state,
    }

}

const postPlayer = (state: appState.State, name: string) => {
    // Create new player
    const player = new Player(name, uuidv4(), 0, 0)

    // Add to state
    return {
        ...state,
        players: [...state.players, player]
    }

}

const deletePlayer = (state: appState.State, id: string) => {

    return {
        ...state,
        players: state.players.filter(o => o.id != id) // Remove the player from the array.
    }
}



export const appReducer = createReducer(
    appState.initialState,
    on(appActions.postMatch, (state, { playerOneId, playerTwoId, sets }) => { return postMatch(state, playerOneId, playerTwoId, sets) }),
    on(appActions.postPlayer, (state, { name }) => { return postPlayer(state, name) }),
    on(appActions.deletePlayer, (state, { id }) => { return deletePlayer(state, id)})
)
