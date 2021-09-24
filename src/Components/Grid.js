import React from 'react';
import Card from './Card';

export default class Grid extends React.Component {
    render() {
        const { gameBord } = this.props
        return (
            <table>
                <tbody>
                {gameBord.map((row, row_index) =>
                    <tr key={row_index}>
                        {row.map((cell, col_idex) =>
                            <td key={(row_index.toString() + col_idex.toString())}>
                                <Card card={cell} ></Card>
                            </td>)
                        }
                    </tr>)
                }
                </tbody>
            </table>
        );
    }
}