
import React from 'react'
import { useDispatch } from 'react-redux'
import { cardClick } from '../Actions/BoardActions';

const Card = ({ card }) => {
    const dispatch = useDispatch()

    return (
        <div className={'board-card ' + (!card.visible ? 'hiden' : '')} key={card}>
            <img className='card-img' onClick={() => dispatch(cardClick(card))} src={card.frontShown ? card.frontPicture : card.backPicture} alt='' />
        </div>
    );
}

export default Card