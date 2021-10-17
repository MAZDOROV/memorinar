import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';

const Grid = ({ gameBord }) => {

    return (
        <table>
            <tbody>{
                gameBord.map?
                gameBord.map((row, row_index) =>
                    <tr key={row_index}>
                        {row.map((cell, col_idex) =>
                            <td key={(row_index.toString() + col_idex.toString())}>
                                <Card card={cell} />
                            </td>)
                        }
                    </tr>)
                :<></>
            }
            </tbody>
        </table>
    );
}

const mapStateToProps = state => {
    console.log(state);
    return {
        gameBord: state.board
    }
}

export default connect(mapStateToProps, null)(Grid)