
import React from 'react'

export default class Card extends React.Component {
    render() {
        const { card } = this.props;
        let picture = card.frontShown?card.frontPicture:card.backPicture
        return (
            <div key={card} width="100">
                
                <img src={picture} className="CardPic" alt='' onClick={() => { console.log('клик'); }} />
            </div>
        );
    }
}