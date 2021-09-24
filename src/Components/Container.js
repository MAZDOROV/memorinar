import React from 'react';
import '../App.css';
import Example from './Example';
import Grid from "./Grid"

let gameBordArr = [
    [{index:11},{index:12},{index:13}],
    [{index:21},{index:22},{index:23}],
    [{index:31},{index:32},{index:33}],
];

export default class Container extends React.Component {
    render() {
        

        return (
            <div className="App" >
                <header className="App-header">
                <Grid gameBord = {gameBordArr}></Grid>
                </header>
            </div>
        );
    }


}