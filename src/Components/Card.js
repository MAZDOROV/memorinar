
import React from 'react'

export default class Card extends React.Component {
    render() {
        const { card } = this.props;
        return (
            <div key={card} width="100">
                <img src={card.frontPicture} className="CardPic" alt='' onClick={() => { console.log('клик'); }} />
            </div>
        );
    }
}