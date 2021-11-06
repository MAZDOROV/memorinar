import React from 'react'
import { startGame, stopGame } from '../Actions/GameActions'
import { showAllCards } from '../Actions/BoardActions'
import { connect, useDispatch } from 'react-redux'



const Menu = () => {
    const dispatch = useDispatch()

    return (
        <div className="menu">
            <div className="btn" onClick={() => dispatch(startGame())}>New Game</div>
            <div className="btn" onClick={() => dispatch(showAllCards())}>Show all</div>
            <div className="btn">Pause</div>
            <div className="btn" onClick={() => dispatch(stopGame())}>Stop</div>
            <div className="btn">Save</div>
            <div className="timer">
                <span>00:00:00</span>
            </div>
        </div>
    );
}

export default connect(null, null)(Menu)