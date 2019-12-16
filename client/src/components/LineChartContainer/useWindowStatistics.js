import { useEffect, useState } from 'react';

//math functions for providing additional insights
import {calculatePercentile25,calculatePercentile50,calculatePercentile75} from '../../helpers/mathFunctions';

export const useWindowStatistics = (
	movingTimeSeries,
	showAverage,
	showPercentile25,
	showPercentile50,
	showPercentile75
) => {
	const [average, setAverage] = useState(0);
	const [percentile25, setPercentile25] = useState(0);
	const [percentile50, setPercentile50] = useState(0);
	const [percentile75, setPercentile75] = useState(0);
	//calculate average
	useEffect(() => {
		showAverage &&
			movingTimeSeries.length > 0 &&
			setAverage(
				movingTimeSeries.reduce(
					(sumAccumulator, { value }) => sumAccumulator + value,
					0
				) / movingTimeSeries.length
			);
	}, [movingTimeSeries, showAverage]);

	//calculate 25th percentile
	useEffect(() => {
		showPercentile25 &&
			movingTimeSeries.length > 0 &&
			setPercentile25(calculatePercentile25(movingTimeSeries));
	}, [movingTimeSeries, showPercentile25]);

	//calculate 50th percentile
	useEffect(() => {
		showPercentile50 &&
			movingTimeSeries.length > 0 &&
			setPercentile50(calculatePercentile50(movingTimeSeries));
	}, [movingTimeSeries, showPercentile50]);

	//calculate 75th percentile
	useEffect(() => {
		showPercentile75 &&
			movingTimeSeries.length > 0 &&
			setPercentile75(calculatePercentile75(movingTimeSeries));
    }, [movingTimeSeries, showPercentile75]);
    
    return [average,percentile25,percentile50,percentile75];
};