
import React from 'react'
import { useDispatch } from 'react-redux'
import { cardClick } from '../Actions/BoardActions';

export default ({ card }) => {
    const dispatch = useDispatch()
    if (card.visible == false)
    {
        return (<></>)
    }
    return (
        <div className='board-card' key={card}>
            <button className='btn btn-secondary' onClick={() => dispatch(cardClick(card))}>
                <img className='card-img' src={card.frontShown ? card.frontPicture : card.backPicture} className="CardPic rounded" alt='' />
            </button>
        </div>
    );
}

