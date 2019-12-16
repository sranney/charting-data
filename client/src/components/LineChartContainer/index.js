import React, { useState, useContext } from 'react';

//components
import LineChartGraph from './LineChartGraph';
import LineChartController from './LineChartController';

//styled components
import {Container} from '../shared-styles/charts';

const LineChartContainer = () => {
    const windowLengthState = useState(30);
    const maxThresholdState = useState(50);
    const minThresholdState = useState(-50);
    const chartYMaxState = useState(110);
    const chartYMinState = useState(-110);
    const showAverageState = useState(false);
    const showPercentile25State = useState(false);
    const showPercentile50State = useState(false);
    const showPercentile75State = useState(false);

    return (
        <Container>
            <LineChartGraph 
                windowLength={windowLengthState[0]} 
                maxThreshold={maxThresholdState[0]} 
                minThreshold={minThresholdState[0]} 
                chartYMax={chartYMaxState[0]} 
                chartYMin={chartYMinState[0]}
                showAverage={showAverageState[0]}
                showPercentile25={showPercentile25State[0]}
                showPercentile50={showPercentile50State[0]}
                showPercentile75={showPercentile75State[0]}
            />
            <LineChartController
                windowLengthState={windowLengthState}
                maxThresholdState={maxThresholdState} 
                minThresholdState={minThresholdState}
                chartYMaxState={chartYMaxState}
                chartYMinState={chartYMinState}
                showAverageState={showAverageState}
                showPercentile25State={showPercentile25State}
                showPercentile50State={showPercentile50State}
                showPercentile75State={showPercentile75State}
            />
        </Container>
    )
};

export default LineChartContainer;