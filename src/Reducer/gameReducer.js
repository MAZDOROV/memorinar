import { START_GAME, STOP_GAME, PAUSE_GAME } from "../Constants";
const initialState = {
    pause: false,
    time: 0
}

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_GAME:
            state = initialState; 
            return { ...state, startGame: true }
        case STOP_GAME:
            return { ...state, stopGame: true }
        case PAUSE_GAME:
            return { ...state, pauseGame: true }
    }
    return state;
}