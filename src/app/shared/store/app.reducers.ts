// Here is the business logic for the app state. Reducers are separated into a separate function for readability. Creating the reducer itself and assigning functions
// to certain actions is on the bottom of the file

import { createReducer, on } from "@ngrx/store";
import { appActions, appState } from ".";
import { v4 as uuidv4 } from 'uuid';
import { Player } from "src/app/player/player.model";
import { Match } from "src/app/match/match.model";


const postMatch = (state: appState.State, playerOneId: string, playerTwoId: string, sets: Array<Array<number>>) => {

    // Using spread operator to copy the object since state is immutable
    let playerOne = { ...state.players.find(o => o.id === playerOneId) as Player }
    let playerTwo = { ...state.players.find(o => o.id === playerTwoId) as Player }

    let playerOneSetCounter: number = 0
    let playerTwoSetCounter: number = 0

    let playerWonId: string = ""

    // Loop through each set, add sets won to corresponding player and calculate the winner of the match
    sets.forEach(set => {
        if (set[0] > set[1]) playerOneSetCounter++
        else if (set[1] > set[0]) playerTwoSetCounter++
    })

    if (playerOneSetCounter > playerTwoSetCounter) {
        playerOne.matchesWon++
        playerWonId = playerOne.id
    } else {
        playerTwo.matchesWon++
        playerWonId = playerTwo.id
    }

    playerOne.setsWon += playerOneSetCounter
    playerTwo.setsWon += playerTwoSetCounter


    // Look https://stackoverflow.com/a/59674035.
    // In short, the state is immutable so to change the property on the object inside the array we first have to mutate the array and then the object inside the array.
    const players: Player[] = state.players
        .map(player => ({ ...player }))
        .map(player => {
            if (player.id === playerOne.id) {
                return playerOne
            } else if (player.id === playerTwo.id) {
                return playerTwo
            } else return player
        })

    // Create new match object
    const match: Match = new Match(uuidv4(), playerOne.id, playerTwo.id, sets, playerWonId)

    // Add to state
    return {
        ...state,
        players: players,
        matches: [...state.matches, match]
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

const selectMatch = (state: appState.State, id: string) => {

    return {
        ...state,
        selectedMatchId: id
    }
}

const selectPlayer = (state: appState.State, id: string) => {

    return {
        ...state,
        selectedPlayerId: id
    }
}

// We are selecting the most recent matches a player has played to be displayed on the player details page
// This should filter matches based on the date and return a couple of newest matches, but for this example app we are returning every match
const selectRecentlyPlayedMatches = (state: appState.State, playerId: string) => {

    const recentlyPlayedMatches = state.matches.filter(o => o.playerOneId === playerId || o.playerTwoId === playerId)

    return {
        ...state,
        recentlyPlayedMatches: recentlyPlayedMatches
    }
}




export const appReducer = createReducer(
    appState.initialState,
    on(appActions.postMatch, (state, { playerOneId, playerTwoId, sets }) => { return postMatch(state, playerOneId, playerTwoId, sets) }),
    on(appActions.postPlayer, (state, { name }) => { return postPlayer(state, name) }),
    on(appActions.deletePlayer, (state, { id }) => { return deletePlayer(state, id) }),
    on(appActions.selectMatch, (state, { id }) => { return selectMatch(state, id) }),
    on(appActions.selectPlayer, (state, { id }) => { return selectPlayer(state, id) }),
    on(appActions.selectRecentlyPlayedMatches, (state, { playerId }) => { return selectRecentlyPlayedMatches(state, playerId) })

)
