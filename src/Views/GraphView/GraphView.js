import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export const GraphView = () => {
  return (
    <main className="app-main">
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
          {
            data: [4, 6.5, 1, 5.5, 8.5, 12],
          },
        ]}
        width={1000}
        height={600}
      />
    </main>
  );
};
