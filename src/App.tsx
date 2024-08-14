import "./index.css";
import ControlPanel from "./components/ControlPanel";
import ChartContainer from "./components/ChartContainer";

///// TODO - kolla om det verkligen är en generic component, testa lägga in ett nytt dataset snabbt och lätt.
///// OCH - vi skulle använda props.... kolla detta

function App() {
  return (
    <div className="bg-zinc-900">
      <ChartContainer />
      <ControlPanel />
    </div>
  );
}

export default App;
