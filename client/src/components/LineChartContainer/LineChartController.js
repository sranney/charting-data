import React, { useRef } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

//component
import ControllerInput from '../ControllerInput';

const StyledInput = styled.input`
    ${tw`
        text-base md:text-lg
    `};
`;

const ControllerContainer = styled.div`
    ${tw`
        text-base
    `};
`;

const LineChartController = ({
    windowLengthState: [windowLength, setWindowLength=()=>{}],
    maxThresholdState: [maxThreshold, setMaxThreshold=()=>{}],
    minThresholdState: [minThreshold, setMinThreshold=()=>{}],
    chartYMaxState: [chartYMax, setChartYMax=()=>{}],
    chartYMinState: [chartYMin, setChartYMin=()=>{}],
    showAverageState: [showAverage, setShowAverage=()=>{}],
    showPercentile25State: [showPercentile25, setShowPercentile25=()=>{}],
    showPercentile50State: [showPercentile50, setShowPercentile50=()=>{}],
    showPercentile75State: [showPercentile75, setShowPercentile75=()=>{}],
}) => {
    const windowLengthRef = useRef();
    const maxThresholdRef = useRef();
    const minThresholdRef = useRef();
    const chartYMaxRef = useRef();
    const chartYMinRef = useRef();
    const showAverageRef = useRef();
    const showPercentile25Ref = useRef();
    const showPercentile50Ref = useRef();
    const showPercentile75Ref = useRef();

    return (
        <ControllerContainer>
            <ControllerInput
                type='number'
                label='Window Length'
                name='windowLength'
                defaultValue={windowLength}
                refProp={windowLengthRef}
                setter={setWindowLength}
            />
            <ControllerInput
                type='number'
                label='Max Threshold'
                name='maxThreshold'
                defaultValue={maxThreshold}
                refProp={maxThresholdRef}
                setter={setMaxThreshold}
            />
            <ControllerInput
                type='number'
                label='Min Threshold'
                name='minThreshold'
                defaultValue={minThreshold}
                refProp={minThresholdRef}
                setter={setMinThreshold}
            />
            <ControllerInput
                type='number'
                label='Chart Y Max'
                name='chartYMax'
                defaultValue={chartYMax}
                refProp={chartYMaxRef}
                setter={setChartYMax}
            />
            <ControllerInput
                type='number'
                label='Chart Y Min'
                name='chartYMin'
                defaultValue={chartYMin}
                refProp={chartYMinRef}
                setter={setChartYMin}
            />  
            <ControllerInput
                type='checkbox'
                label='Show Average'
                name='showAverage'
                defaultValue={showAverage}
                refProp={showAverageRef}
                setter={setShowAverage}
            />
            <ControllerInput
                type='checkbox'
                label='Show 25th percentile'
                name='showPercentile25'
                defaultValue={showPercentile25}
                refProp={showPercentile25Ref}
                setter={setShowPercentile25}
            />
            <ControllerInput
                type='checkbox'
                label='Show 50th percentile'
                name='showPercentile50'
                defaultValue={showPercentile50}
                refProp={showPercentile50Ref}
                setter={setShowPercentile50}
            />
            <ControllerInput
                type='checkbox'
                label='Show 75th percentile'
                name='showPercentile75'
                defaultValue={showPercentile75}
                refProp={showPercentile75Ref}
                setter={setShowPercentile75}
            />
        </ControllerContainer>
    )
}

export default LineChartController;