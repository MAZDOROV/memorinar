
import './App.css';
import Grid from "../Components/Grid"
import Menu from "../Components/Menu"

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
