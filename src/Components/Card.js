
import React from 'react'
import { useDispatch } from 'react-redux'
import { cardClick } from '../Actions/BoardActions';

export default ({ card }) => {
    const dispatch = useDispatch()
    if (card.visible === false)
    {
        return (<div className='board-card' key={card}></div>)
    }

    return (
        <div className='board-card' key={card}>
            <img className='card-img' onClick={() => dispatch(cardClick(card))} src={card.frontShown ? card.frontPicture : card.backPicture} alt='' />
        </div>
    );
}