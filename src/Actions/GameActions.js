import { START_GAME, STOP_GAME, PAUSE_GAME, INCREMENT_TIME, RESET_TIME, STOP_TIMER } from "../Constants"

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

export function resetTime() {
    return {
        type: RESET_TIME
    }
}

export function incTime() {
    return {
        type: INCREMENT_TIME
    }
}

export function stopTimer() {
    return {
        type: STOP_TIMER
    }
}

export function startTimer() {
    return dispatch => {
        const id = setInterval(
            ()=>dispatch({type:INCREMENT_TIME, payload: id}), 
            1000
            );
    }
}


