import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';

const Grid = ({ gameBord }) => {

    return (
        <div className='board'>
            {
                gameBord.map ?
                    gameBord.map((row, row_index) =>
                        <div className='board-row' key={row_index}>
                            {row.map((cell, col_idex) =>
                                <div className='board-cell' key={(row_index.toString() + col_idex.toString())}>
                                    <Card card={cell} />
                                </div>)
                            }
                        </div>)
                    : <></>
            }
        </div>
    );
}

const mapStateToProps = state => {
    console.log(state);
    return {
        gameBord: state.board
    }
}

export default connect(mapStateToProps, null)(Grid)