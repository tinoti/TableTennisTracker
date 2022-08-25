import { createAction, props, union } from "@ngrx/store";

export enum ActionTypes {
    POST_PLAYER = "[Player] Post player",
    DELETE_PLAYER = "[Player] Delete player"
}

export const postPlayer = createAction(
    ActionTypes.POST_PLAYER,
    props<{ name: string }>()
)

export const deletePlayer = createAction(
    ActionTypes.DELETE_PLAYER,
    props<{ id: string }>()
)


const actions = union({
    postPlayer,
    deletePlayer
})

export type ActionsUnion = typeof actions