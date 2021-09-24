import React from 'react';
import '../App.css';
import Example from './Example';
import Grid from "./Grid"

export default class Container extends React.Component {
    render() {
        return (
            <div className="App" >
                <header className="App-header">
                <Grid></Grid>
                </header>
            </div>
        );
    }


}