
import './App.css';
import Grid from "../Components/Grid"
import Menu from "../Components/Menu"

function App() {
  return (
    <div className="app" >
      <div className="app-header">
        <Menu></Menu>
      </div>
      <div className="app-content">
        <Grid />
      </div>
    </div>
  );
}

export default App;
