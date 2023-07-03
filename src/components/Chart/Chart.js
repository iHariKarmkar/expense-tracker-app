import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {
    const chartDataValues = props.chartData.map((data) => data.value)
    const totalMax = Math.max(...chartDataValues);
  return (
    <div className="chart">
      {props.chartData.map((item) => (
        <ChartBar
          key={item.label}
          label={item.label}
          maxValue={totalMax}
          value={item.value}
        />
      ))}
    </div>
  );
};

export default Chart;
