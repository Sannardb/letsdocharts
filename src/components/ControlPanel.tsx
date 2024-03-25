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
    <div>
      <button onClick={handleBackgroundColorChange}>
        Change Background Color
      </button>
      <button onClick={changeToBarChart}>Bar Chart</button>
      <button onClick={changeToLineChart}>Line Chart</button>
      <button onClick={addRandomValue}>Add random value</button>
    </div>
  );
};

export default ControlPanel;
