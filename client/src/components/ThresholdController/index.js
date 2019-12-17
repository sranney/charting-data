import React, { useRef, useContext } from 'react';

//components
import ControllerInput from '../ControllerInput';
import AlertCard from './AlertCard';

//helper hooks
import useViolationAlerts from './useViolationAlerts';

//context api
import ObservationsContext from '../../helpers/context/ObservationsContext';

const ThresholdController = ({
    maxThreshold,
    setMaxThreshold,
    minThreshold,
    setMinThreshold
}) => {
    const observations = useContext(ObservationsContext);
    
    //slice will take off the last element of the observations array
    const [showAlert, setShowAlert, violations] = useViolationAlerts(observations.slice(-1)[0],minThreshold, maxThreshold);

    const maxThresholdRef = useRef();
    const minThresholdRef = useRef();

    return (
        <div>
            <ControllerInput
                type='number'
                label='Max Threshold'
                name='maxThreshold'
                defaultValue={maxThreshold}
                refProp={maxThresholdRef}
                setter={setMaxThreshold}
                canDisable={true}
            />
            <ControllerInput
                type='number'
                label='Min Threshold'
                name='minThreshold'
                defaultValue={minThreshold}
                refProp={minThresholdRef}
                setter={setMinThreshold}
                canDisable={true}
            />
            {showAlert && <AlertCard newViolation={violations[0]} setShowAlert={setShowAlert}/>}
        </div>
    );
}

export default ThresholdController;