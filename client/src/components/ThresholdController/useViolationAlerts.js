import { useState, useEffect, useRef } from 'react';

const useViolationAlerts = (newData, minThreshold, maxThreshold) => {
    const [showAlert, setShowAlert] = useState(false);
    const [violations, setViolations] = useState(window.localStorage.getItem('violations') || []);


    useEffect(()=>{
        if(newData) {
            if(
                (typeof minThreshold === 'number' && newData.value < minThreshold) 
                || (typeof maxThreshold === 'number' && newData.value > maxThreshold)
            ) {
                const { timestamp, value } = newData;
                //show alert
                setShowAlert(true);
                //push observation into violations array
                setViolations(violations => [
                    newData,
                    ...violations
                ]);
                //and set violations array in local storage with new data
                window.localStorage.setItem(//push the new data into local storage array
                    'violations',
                    JSON.stringify(
                        [
                            newData,
                            ...(JSON.parse(window.localStorage.getItem('violations'))||[]),
                        ]
                    )
                );
            }
        }
    },[newData,minThreshold,maxThreshold]);

    return [showAlert, setShowAlert,violations ];
}

export default useViolationAlerts;