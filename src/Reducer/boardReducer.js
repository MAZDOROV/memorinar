import { START_GAME, STOP_GAME, SHOW_ALL_CARDS, CARD_CLICK, CARD_UNVISIBLE, CARD_VISIBLE } from "../Constants";
import DataGenerator from "../Store/DataGenerator"

const initialSatet = []

function showAll(state) {
    for (let i = 0; i < state.length; i++) {
        for (let j = 0; j < state[i].length; j++) {
            state[i][j].frontShown = !state[i][j].frontShown;
        }
    }
}

export const boardReducer = (state = initialSatet, action) => {
    switch (action.type) {
        case START_GAME:
            let generator = new DataGenerator();
            state = generator.generate({ rows: 4, columns: 4 })
            return [...state];
        case STOP_GAME:
            state = []
            return [...state]
        case SHOW_ALL_CARDS:
            showAll(state)
            return [...state]
        case CARD_CLICK:
           /*  action.payload.frontShown = true */
            return [...state]
        case CARD_VISIBLE:
            action.payload.visible = true
            return [...state]
        case CARD_UNVISIBLE:
            action.payload.visible = false
            return [...state]
        default:
            return state
    }
}