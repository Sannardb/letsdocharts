import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dataset } from "../components/interfaces";

interface ChartState {
  backgroundColor: string;
  datasets: Dataset[];
  chartType: "bar" | "line";
}

const initialState: ChartState = {
  datasets: [
    {
      id: "dataset1",
      label: "Initial Dataset",
      data: [10, 20, 30],
      backgroundColor: "rgb(60, 179, 113)",
      chartType: "bar", // This can be removed if we're using a global chartType
    },
    {
      id: "dataset2",
      label: "New Dataset",
      data: [60, 70, 80, 90, 100],
      backgroundColor: "rgba(75, 192, 192, 0.5)",
      chartType: "line", // This can be removed if we're using a global chartType
    },
  ],
  backgroundColor: "rgb(60, 179, 113)",
  chartType: "bar",
};

export const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<{ value: number }>) => {
      state.datasets.forEach((dataset) => {
        dataset.data.push(action.payload.value);
      });
    },
    setBackgroundColor: (state, action: PayloadAction<string>) => {
      state.backgroundColor = action.payload;
      state.datasets.forEach((dataset) => {
        dataset.backgroundColor = action.payload;
      });
    },
    setChartType: (state, action: PayloadAction<"bar" | "line">) => {
      state.chartType = action.payload;
    },
  },
});

export const { setBackgroundColor, addData, setChartType } = chartSlice.actions;
export default chartSlice.reducer;
