import type { IData, IGroupedData } from "./types";

export const BAR_CHART_DATA: IData[] = [
  { label: "Madhesh", value: 20.98 },
  { label: "Bagmati", value: 20.84 },
  { label: "Lumbini", value: 17.55 },
  { label: "Province 1", value: 17.03 },
  { label: "Sudurpaschim", value: 9.28 },
  { label: "Gandaki", value: 8.49 },
  { label: "Karnali", value: 5.8 },
];

export const GROUPED_BAR_CHART_DATA: IGroupedData[] = [
  { label: "Madhesh", values: [50.29, 49.71] },
  { label: "Bagmati", values: [49.69, 50.31] },
  { label: "Lumbini", values: [47.49, 52.51] },
  { label: "Province 1", values: [47.77, 52.23] },
  { label: "Sudurpaschim", values: [47.71, 52.29] },
  { label: "Gandaki", values: [45.61, 54.39] },
  { label: "Karnali", values: [48.92, 51.08] },
];

export const Piedata = [
  {
    date: "Male",
    value: 78.59,
  },
  {
    date: "Female",
    value: 59.72,
  },
];
