import { START_GAME, STOP_GAME, PAUSE_GAME } from "../Constants";
const initialSatet = {
    pause: false,
    gameTime: 0
}

export const gameReducer = (state = initialSatet, action) => {
    switch (action.type) {
        case START_GAME:
            return { ...state, startGame: true }
        case STOP_GAME:
            return { ...state, stopGame: true }
        case PAUSE_GAME:
            return { ...state, pauseGame: true }
    }
    return state;
}