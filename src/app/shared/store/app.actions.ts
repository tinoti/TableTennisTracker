import { createAction, props, union } from "@ngrx/store";

export enum ActionTypes {
    POST_MATCH = "[Match] Post match",
    DELETE_MATCH = "[Match] Delete match",
    SELECT_MATCH = "[Match] Select match",
    POST_PLAYER = "[Player] Post player",
    DELETE_PLAYER = "[Player] Delete player"
}

export const postMatch = createAction(
    ActionTypes.POST_MATCH,
    props<{ playerOneId: string, playerTwoId: string, sets: Array<Array<number>> }>()
)

export const deleteMatch = createAction(
    ActionTypes.DELETE_MATCH,
    props<{ id: string }>()
)

export const selectMatch = createAction(
    ActionTypes.SELECT_MATCH,
    props<{ id: string }>()
)

export const postPlayer = createAction(
    ActionTypes.POST_PLAYER,
    props<{ name: string }>()
)

export const deletePlayer = createAction(
    ActionTypes.DELETE_PLAYER,
    props<{ id: string }>()
)




const actions = union({
    postMatch,
    deleteMatch,
    selectMatch,
    postPlayer,
    deletePlayer
})

export type ActionsUnion = typeof actions


