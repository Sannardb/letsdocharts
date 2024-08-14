import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addData,
  setBackgroundColor,
  setChartType,
} from "../features/chartSlice";
import { RootState } from "../store";

const ControlPanel = () => {
  const dispatch = useDispatch();
  const datasets = useSelector((state: RootState) => state.chart.datasets);

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const addRandomValueToDatasets = () => {
    const value = Math.floor(Math.random() * 100);
    dispatch(addData({ value }));
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
      <button onClick={handleBackgroundColorChange}>
        Change Background Color
      </button>
      <button onClick={changeToBarChart}>Bar Chart</button>
      <button onClick={changeToLineChart}>Line Chart</button>
      <button onClick={addRandomValueToDatasets}>Add Example Week</button>
    </div>
  );
};

export default ControlPanel;
