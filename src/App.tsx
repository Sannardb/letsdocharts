import "./App.css";
import { ChartComponent } from "./components/ChartComponent";
import ControlPanel from "./components/ControlPanel";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ChartComponent />
        <ControlPanel />
      </header>
    </div>
  );
}

export default App;
