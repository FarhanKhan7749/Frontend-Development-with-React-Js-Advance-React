import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css';
const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues)
    return (
        <div className="chart">
            {console.log("hello")}
            {props.dataPoints.map(dataPoint =>
                <ChartBar
                    key={dataPoint.lable}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            )}
        </div>
    )
}

export default Chart