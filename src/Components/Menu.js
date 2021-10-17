import React from 'react'
import { startGame, stopGame } from '../Actions/GameActions'
import { showAllCards } from '../Actions/BoardActions'
import { connect, useDispatch } from 'react-redux'



const Menu = () => {
    const dispatch = useDispatch()

    return (
        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group me-2" role="group" aria-label="Second group">
                <button type="button" className="btn btn-secondary" onClick={() => dispatch(startGame())}>New Game</button>
                <button type="button" className="btn btn-secondary" onClick={() => dispatch(showAllCards())}>Show all</button>
                <button type="button" className="btn btn-secondary">Pause</button>
                <button type="button" className="btn btn-secondary" onClick={() => dispatch(stopGame())}>Stop</button>
                <button type="button" className="btn btn-secondary">Save</button>
            </div>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Time
                    <span className="badge bg-secondary rounded-pill">00:00:00</span>
                </li>
            </ul>
        </div>
    );
}

export default connect(null, null)(Menu)