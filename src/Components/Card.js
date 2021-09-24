
import React from 'react'

export default class Card extends React.Component {
    render() {
        const {card} = this.props;
        return (
            <div key={card}>{card.frontFilePath}</div>
        );
    }
}