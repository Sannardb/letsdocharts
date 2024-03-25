import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Bar, Line, Doughnut } from "react-chartjs-2";
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
export const ChartComponent = () => {
  const { data, backgroundColor, chartType } = useSelector(
    (state: RootState) => state.chart
  );

  console.log(chartType);

  const chartData = {
    labels: data.map((_, index) => `Item ${index + 1}`),
    datasets: [
      {
        label: "Dataset",
        data,
        backgroundColor,
      },
    ],
  };

  const Chart = chartType === "bar" ? Bar : Line;

  return <Chart data={chartData} />;
};
