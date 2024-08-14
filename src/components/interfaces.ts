export interface Dataset {
  id: string;
  label: string;
  data: number[];
  backgroundColor: string;
  chartType: "bar" | "line"; // Ensure all accessed properties are defined
}
export interface ChartComponentProps {
  datasets: Dataset[];
  chartType: "bar" | "line";
}
