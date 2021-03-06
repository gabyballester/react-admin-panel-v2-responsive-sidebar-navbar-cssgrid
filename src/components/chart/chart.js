import { XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines } from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';
import './Chart.css';

const chart = () => {
  const data = [
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 },
    { x: 10, y: 3 }
  ]

  return (
    <div className="chart-container">
      <XYPlot height={250} width={454}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={data} color="red" />
        <LineSeries data={data} color="purple" />
        <LineSeries data={data} color="yellow" />
      </XYPlot>
    </div>
  )
}

export default chart

