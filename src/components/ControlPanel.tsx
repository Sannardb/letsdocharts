import { useDispatch } from "react-redux";
import {
  addData,
  setBackgroundColor,
  setChartType,
} from "../features/chartSlice";

const ControlPanel = () => {
  const dispatch = useDispatch();

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const addRandomValue = () => {
    const value = Math.floor(Math.random() * 100);
    dispatch(addData(value));
  };

  const handleBackgroundColorChange = () => {
    const newColor = getRandomColor();
    dispatch(setBackgroundColor(newColor));
  };

  const changeToLineChart = () => {
    dispatch(setChartType("line"));
  };

  const changeToBarChart = () => {
    dispatch(setChartType("bar"));
  };

  return (
    <div className="flex justify-center gap-5">
      <button
        onClick={handleBackgroundColorChange}
        className="bg-zinc-950 hover:bg-zinc-900 text-white py-2 px-4 rounded-full"
      >
        Change Background Color
      </button>
      <button
        onClick={changeToBarChart}
        className="bg-zinc-950 hover:bg-zinc-900 text-white py-2 px-4 rounded-full"
      >
        Bar Chart
      </button>
      <button
        onClick={changeToLineChart}
        className="bg-zinc-950 hover:bg-zinc-900 text-white py-2 px-4 rounded-full"
      >
        Line Chart
      </button>
      <button
        onClick={addRandomValue}
        className="bg-zinc-950 hover:bg-zinc-900 text-white py-2 px-4 rounded-full"
      >
        Add example week
      </button>
    </div>
  );
};

export default ControlPanel;
