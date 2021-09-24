import React from 'react'

export default class Grid extends React.Component {
    render (){
        const {gameBord} = this.props
        return(
            <table>
                {gameBord.map((row, row_index) => 
                    <tr>
                        {row.map((col, col_idex) => 
                            <td>
                                {row_index}{col_idex};
                            </td>)}
                    </tr>)}
            </table>
        );
    }
}