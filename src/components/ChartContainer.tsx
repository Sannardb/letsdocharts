import React from "react";
import { useSelector } from "react-redux";
import { ChartComponent } from "./ChartComponent";
import { RootState } from "../store";

const ChartContainer = () => {
  // Fetch datasets from Redux state
  const chartType = useSelector((state: RootState) => state.chart.chartType);
  const datasets = useSelector((state: RootState) => state.chart.datasets);

  const barChartDatasets = datasets.filter(
    (dataset) => dataset.chartType === "bar"
  );
  const lineChartDatasets = datasets.filter(
    (dataset) => dataset.chartType === "line"
  );

  return (
    <div>
      <ChartComponent datasets={barChartDatasets} chartType={chartType} />
      <ChartComponent datasets={lineChartDatasets} chartType={chartType} />
    </div>
  );
};

export default ChartContainer;
