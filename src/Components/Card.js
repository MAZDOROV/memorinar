
import React from 'react'


export default class Card extends React.Component {
    render() {
        const { card } = this.props;
        
        return (
            <div key={card} width="100">
                <button className='btn btn-secondary' onClick={()=>(console.log("log"))}>
                    <img src={card.frontShown?card.frontPicture:card.backPicture} className="CardPic rounded" alt='' />
                </button>
            </div> 
        );
    }
}