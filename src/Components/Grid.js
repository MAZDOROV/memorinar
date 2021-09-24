import React from 'react'

export default class Grid extends React.Component {
    render (){
        let rows = [1,2,3];
        let columns = [1,2,3];
        return(
            <table>
                {rows.map(row => <tr>{columns.map(col => <td>{row}_{col}</td>)}</tr>)}
            </table>
        );
    }
}