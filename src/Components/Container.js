import React from 'react';
import '../App.css';
import Grid from "./Grid"
import lexus from "../imgs/lexus.png"
import cadillac from "../imgs/cadillac.png"

let gameBordArr = [
    [
        {
            key: 1,
            index: 11,
            frontFilePath: lexus
        },
        {
            key: 2,
            index: 12,
            frontFilePath: cadillac
        },
        {
            key: 3,
            index: 13,
            frontFilePath: lexus
        }
    ],
    [
        {
            key: 4,
            index: 21,
            frontFilePath: cadillac
        },
        {
            key: 5,
            index: 22,
            frontFilePath: lexus
        },
        {
            key: 6,
            index: 23,
            frontFilePath: cadillac
        }
    ],
    [
        {
            key: 7,
            index: 31,
            frontFilePath: lexus
        },
        {
            key: 8,
            index: 32,
            frontFilePath: cadillac
        },
        {
            key: 9,
            index: 33,
            frontFilePath: lexus
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