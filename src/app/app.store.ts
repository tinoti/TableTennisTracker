import { playerState } from './player/store'

export interface AppState {
    player: playerState.State
}