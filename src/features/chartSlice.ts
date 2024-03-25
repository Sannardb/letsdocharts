import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChartState {
  data: number[];
  backgroundColor?: string;
  chartType?: "bar" | "line";
}

const initialState: ChartState = {
  data: [10, 20, 30],
  backgroundColor: "rgb(60, 179, 113)",
  chartType: "bar",
};

const maxItems = 100;

export const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    updateData: (state, action: PayloadAction<number[]>) => {
      state.data = action.payload;
    },
    setBackgroundColor: (state, action: PayloadAction<string>) => {
      state.backgroundColor = action.payload;
    },
    setChartType: (state, action: PayloadAction<"bar" | "line">) => {
      state.chartType = action.payload;
    },
    addData: (state, action: PayloadAction<number>) => {
      if (state.data.length >= maxItems) {
        state.data.shift();
      }
      state.data.push(action.payload);
    },
  },
});

export const { updateData, setBackgroundColor, setChartType, addData } =
  chartSlice.actions;

export default chartSlice.reducer;
