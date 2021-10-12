import { combineReducers } from 'redux'
import { boardReducer } from './boardReducer'
import { gameReducer } from './gameReducer'

export const rootReducer = combineReducers({
    game: gameReducer,
    board: boardReducer
})