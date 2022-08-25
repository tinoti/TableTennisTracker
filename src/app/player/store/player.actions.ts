import { createAction, props, union } from "@ngrx/store";

export enum ActionTypes {
    POST_PLAYER = "[Player] Post player"
}

export const postPlayer = createAction(
    ActionTypes.POST_PLAYER,
    props<{ name: string }>()
)


const actions = union({
    postPlayer
})

export type ActionsUnion = typeof actions