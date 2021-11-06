import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';

const Grid = ({ gameBord }) => {

    return (
        <div className='vertical-center'>
            <div className='board'>
                {
                    gameBord.map ?
                        gameBord.map((row, row_index) =>
                            <div className='board-row' key={row_index}>
                                {row.map((cell, col_idex) =>
                                    <Card card={cell} key={(row_index.toString() + col_idex.toString())} />
                                )}
                            </div>)
                        : <></>
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        gameBord: state.board
    }
}

export default connect(mapStateToProps, null)(Grid)