import { START_GAME, STOP_GAME, PAUSE_GAME, INCREMENT_TIME, RESET_TIME, STOP_TIMER, CARD_CLICK } from "../Constants";
import { getUnique } from "../Components/ArrayHelper";
const initialState = {
    pause: false, //Игра приостановлена
    timer: {
        time: 0, //время прошедшее с начала игры
        intervalID: 0, // Идентификатор для отключения таймера
    },
    identicalCards: 2, // количество одинаковых карточек на поле
    clickedCards: []

}

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_GAME:
            state = initialState;
            return { ...state, startGame: true }
        case STOP_GAME:
            state.clickedCards = []
            return { ...state, stopGame: true }
        case STOP_TIMER:
            clearInterval(state.timer.intervalID)
            return { ...state }
        case PAUSE_GAME:
            return { ...state, pauseGame: true }
        case INCREMENT_TIME:
            state.timer.time++
            state.timer.intervalID = action.payload
            return { ...state }
        case RESET_TIME:
            state.timer.time = 0
            state.timer.intervalID = 0
            return { ...state }
        case CARD_CLICK:
            if (action.payload.visible === false) {
                return state;
            }

            if (state.clickedCards.includes(action.payload)) {
                return state;
            }

            if (state.clickedCards.length === state.identicalCards) {
                let unicumIds = getUnique(state.clickedCards.map(card => { return card.contentId })).length
                if (unicumIds === 1) {
                    state.clickedCards.forEach(card => {
                        setTimeout(() => { card.visible = false }, 100)
                    });
                }
                else {
                    state.clickedCards.forEach(card => {
                        setTimeout(() => { card.frontShown = false }, 100)
                    });
                }
                state.clickedCards = []
                action.payload.frontShown = true
                state.clickedCards.push(action.payload)

                return { ...state }
            }

            action.payload.frontShown = true
            state.clickedCards.push(action.payload)


            return { ...state }
        default:
            return state;
    }




}