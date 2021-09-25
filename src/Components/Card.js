
import React from 'react'

export default class Card extends React.Component {
    render() {
        const { card } = this.props;
        return (
            <div key={card} width="100">
                <img src={card.frontPicture}   className="App-logo" />
                
            </div>
        );
    }
}