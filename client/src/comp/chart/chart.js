
import ChartBar from "./chartBar";
import './chart.css';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(monthExpense => monthExpense.value);

    const totalMaximum = Math.max(...dataPointValues);
    return <div className="chart">
        {props.dataPoints.map(dataPoint => (<ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />))}
    </div>
};

export default Chart;