import "./index.css";
import { ChartComponent } from "./components/ChartComponent";
import ControlPanel from "./components/ControlPanel";

function App() {
  return (
    <div className="bg-zinc-900">
      <ChartComponent />
      <ControlPanel />
    </div>
  );
}

export default App;
