import React from 'react';
import '../App.css';
import Grid from "./Grid"

let gameBordArr = [
    [
        {
            key: 1,
            index: 11,
            frontFilePath: '1.png'
        },
        {
            key: 2,
            index: 12,
            frontFilePath: '1.png'
        },
        {
            key: 3,
            index: 13,
            frontFilePath: '1.png'
        }
    ],
    [
        {
            key: 4,
            index: 21,
            frontFilePath: '1.png'
        },
        {
            key: 5,
            index: 22,
            frontFilePath: '1.png'
        },
        {
            key: 6,
            index: 23,
            frontFilePath: '1.png'
        }
    ],
    [
        {
            key: 7,
            index: 31,
            frontFilePath: '1.png'
        },
        {
            key: 8,
            index: 32,
            frontFilePath: '1.png'
        },
        {
            key: 9,
            index: 33,
            frontFilePath: '1.png'
        }],
];

export default class Container extends React.Component {
    render() {
        return (
            <div className="App" >
                <header className="App-header">
                    <Grid gameBord={gameBordArr}></Grid>
                </header>
            </div>
        );
    }
}