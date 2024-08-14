import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { ChartComponentProps } from "./interfaces";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

export const ChartComponent: React.FC<ChartComponentProps> = ({
  datasets,
  chartType,
}) => {
  const chartData = {
    labels: datasets[0]?.data.map((_, index) => `Week ${index + 1}`) || [],
    datasets: datasets.map((dataset) => ({
      ...dataset,
      backgroundColor: dataset.backgroundColor,
    })),
  };

  const Chart = chartType === "bar" ? Bar : Line;

  return (
    <div className="chart-container">
      <Chart data={chartData} options={{ responsive: true }} />
    </div>
  );
};
