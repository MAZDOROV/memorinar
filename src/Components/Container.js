import React from 'react';
import '../App.css';
import Grid from "./Grid"
import DataGenerator from "./DataGenerator"
import PictureGenerator from "./PictureGenegator"

let pictureGenerator = new PictureGenerator();
let generator = new DataGenerator();
let frontPictures = pictureGenerator.getFrontPictures();
let gameBordArr = generator.generate({rows:6,columns:6}, frontPictures,{})

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