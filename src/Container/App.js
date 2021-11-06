
import './App.css';
import Grid from "../Components/Grid"
import Menu from "../Components/Menu"
import Timer from "../Components/Timer"

function App() {
  return (
    <div className="app" >
      <div className="app-header">
        <Menu></Menu> 
        <Timer></Timer>
      </div>
      <div className="app-content">
        <Grid />
      </div>
    </div>
  );
}

export default App;
