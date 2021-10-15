
import './App.css';
import Grid from "../Components/Grid"
import Menu from "../Components/Menu"
import DataGenerator from "../Store/DataGenerator"
import PictureGenerator from "../Store/PictureGenegator"

let pictureGenerator = new PictureGenerator();
let generator = new DataGenerator();
let frontPictures = pictureGenerator.getFrontPictures();
let backPictures = pictureGenerator.getBackPictures();
let gameBoardArr = generator.generate({ rows: 5, columns: 5 }, frontPictures, backPictures)

function App() {
  return (
    <div className="App" >
      <div className="container pt-3">
        <div className="row">
          <div className="col">
          <Menu></Menu>
          </div>
          <div>
          <header className="App-header">
            <Grid />
          </header>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
