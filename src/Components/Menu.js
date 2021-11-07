import React from 'react'
import { startGame, stopGame, resetTime, startTimer, stopTimer, init } from '../Actions/GameActions'
import { showAllCards } from '../Actions/BoardActions'
import { connect, useDispatch } from 'react-redux'

const Menu = () => {
    const dispatch = useDispatch()
    
    dispatch(init())
    
    return (
        <div className="menu">
            <div className="btn" onClick={() => { btnNewClick() }}>New</div>
            <div className="btn" onClick={() => dispatch(showAllCards())}>All</div>
            <div className="btn" onClick={() => { btnStopClick() } }>Stop</div>
            {/*<div className="btn">Pause</div>
            
            <div className="btn">Save</div> */}
        </div>
    );

    function btnStopClick() {
        dispatch(stopTimer())
        dispatch(stopGame())
    }

    function btnNewClick() {
        dispatch(startGame())
        dispatch(resetTime())
        dispatch(startTimer())
    }
}

export default connect(null, null)(Menu)