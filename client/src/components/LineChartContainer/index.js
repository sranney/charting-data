import React, { useState, useContext } from 'react';

//components
import LineChartGraph from './LineChartGraph';
import LineChartController from './LineChartController';

//styled components
import {Container} from '../shared-styles/charts';

const LineChartContainer = ({maxThreshold,minThreshold}) => {
    const windowLengthState = useState(30);
    const chartYMaxState = useState(110);
    const chartYMinState = useState(-110);
    const showAverageState = useState(false);
    const showPercentile25State = useState(false);
    const showPercentile50State = useState(false);
    const showPercentile75State = useState(false);
    const showMaxThresholdState = useState(false);
    const showMinThresholdState = useState(false);

    return (
        <Container>
            <LineChartGraph 
                windowLength={windowLengthState[0]} 
                chartYMax={chartYMaxState[0]} 
                chartYMin={chartYMinState[0]}
                showAverage={showAverageState[0]}
                showPercentile25={showPercentile25State[0]}
                showPercentile50={showPercentile50State[0]}
                showPercentile75={showPercentile75State[0]}
                maxThreshold={maxThreshold}
                minThreshold={minThreshold}
                showMaxThreshold={showMaxThresholdState[0]}
                showMinThreshold={showMinThresholdState[0]}
            />
            <LineChartController
                windowLengthState={windowLengthState}
                chartYMaxState={chartYMaxState}
                chartYMinState={chartYMinState}
                showAverageState={showAverageState}
                showPercentile25State={showPercentile25State}
                showPercentile50State={showPercentile50State}
                showPercentile75State={showPercentile75State}
                maxThreshold={maxThreshold}
                minThreshold={minThreshold}
                showMaxThresholdState={showMaxThresholdState}
                showMinThresholdState={showMinThresholdState}
            />
        </Container>
    );
};

export default LineChartContainer;