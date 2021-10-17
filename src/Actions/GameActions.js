import { START_GAME, STOP_GAME, PAUSE_GAME, SHOW_ALL_CARDS } from "../Constants"

export function startGame() {
    return {
        type: START_GAME
    }
}

export function stopGame() {
    return {
        type: STOP_GAME
    }
}

export function pauseGame() {
    return {
        type: PAUSE_GAME
    }
}
