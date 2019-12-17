import React, { useEffect, useState, useContext } from 'react';
import {ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceLine, Legend, Line} from 'recharts';

//line chart custom hook helper function
import {useWindowStatistics} from './useWindowStatistics';

//context which provides the set of all observations
import ObservationsContext from '../../helpers/context/ObservationsContext';

//slightly styled axis tick labels - because x-axis labels are a bit long, wanted to rotate them so that I could shwo more and have them be readable
const CustomizedAxisTick = ({x,y,stroke,payload}) => {	
   	return (
    	<g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">{payload.value}</text>
      </g>
    );
};

const CustomizedLabel=(data) => {
    console.log('data', data);
    return <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="scale(2)">{data.payload.value}</text>;
}

const LineChartGraph = ({
    windowLength,
    maxThreshold,
    minThreshold,
    chartYMax,
    chartYMin,
    showMaxThreshold,
    showMinThreshold,
    showAverage,
    showPercentile25, 
    showPercentile50, 
    showPercentile75
}) => {
    const [movingTimeSeries, setMovingTimeSeries] = useState([]);
    const [xAxisInterval, setXAxisInterval] = useState(0);

    const observations = useContext(ObservationsContext);

    //calculate moving timeseries based on updates received for observations array or changes to windowLength
    useEffect(()=>setMovingTimeSeries(() => observations.length > windowLength
        ? observations.slice(observations.length-windowLength)
        : observations    
    ),[windowLength,observations]);

    useEffect(()=>setXAxisInterval(
        (()=>{
            if(windowLength > 90) {
                return 3;
            } else if(windowLength > 60) {
                return 2;
            } else if(windowLength > 30) {
                return 1;
            } else {
                return 0;
            }
        })()
    ),[windowLength]);

    const [average,percentile25,percentile50,percentile75] = useWindowStatistics(movingTimeSeries, showAverage, showPercentile25, showPercentile50, showPercentile75)

    return (
        <ResponsiveContainer width="100%" height={450}>
            <LineChart
                data={movingTimeSeries}
                type='natural'
            >
                <XAxis dataKey="time" height={100} tick={<CustomizedAxisTick/>} tickCount={15} interval={xAxisInterval}/>
                <YAxis domain={[chartYMin, chartYMax]} tickCount={10}/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend/>
                {showMaxThreshold && <ReferenceLine y={maxThreshold} stroke="#D64545" strokeWidth={3} />}
                {showMinThreshold && <ReferenceLine y={minThreshold} stroke="#D64545" strokeWidth={3} />}
                {showAverage && <ReferenceLine y={average} stroke="#044E54" strokeWidth={3} />}
                {showPercentile25 && <ReferenceLine y={percentile25} stroke="#87EAF2" strokeWidth={3} />}
                {showPercentile50 && <ReferenceLine y={percentile50} stroke="#38BEC9" strokeWidth={3} />}
                {showPercentile75 && <ReferenceLine y={percentile75} stroke="#14919B" strokeWidth={3} />}
                <Line isAnimationActive={false} dataKey='value' stroke='#0F609B' strokeWidth={6}/>
            </LineChart>
        </ResponsiveContainer>
    );
        
}

export default LineChartGraph;