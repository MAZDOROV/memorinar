
import React from 'react'
import { useDispatch } from 'react-redux'
import { cardClick } from '../Actions/BoardActions';

export default ({ card }) => {
    const dispatch = useDispatch()
    return (
        <div key={card} width="100">
            <button className='btn btn-secondary' onClick={() => dispatch(cardClick(card))}>
                <img src={card.frontShown ? card.frontPicture : card.backPicture} className="CardPic rounded" alt='' />
            </button>
        </div>
    );
}

