import { START_GAME, STOP_GAME, PAUSE_GAME, INCREMENT_TIME, RESET_TIME, STOP_TIMER } from "../Constants";

const initialState = {
    pause: false,
    timer: {
        time: 0,
        intervalID: 0,
    }
}

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_GAME:
            state = initialState;
            return { ...state, startGame: true }
        case STOP_GAME:
            return { ...state, stopGame: true }
        case STOP_TIMER:
            clearInterval(state.timer.intervalID)
            return { ...state}
        case PAUSE_GAME:
            return { ...state, pauseGame: true }
        case INCREMENT_TIME:
            state.timer.time++
            state.timer.intervalID = action.payload
            return { ...state }
        case RESET_TIME:
            state.timer.time = 0
            state.timer.intervalID = 0
            return {...state}
        default:
            return state;
    }
    
}