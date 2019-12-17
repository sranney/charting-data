import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

//styled components
import {DateContainer} from './styles';

//components
import LineChartContainer from './components/LineChartContainer';
import HistogramContainer from './components/HistogramContainer';
import ThresholdController from './components/ThresholdController';
import Meta from './components/Meta';

//context api
import ObservationsContext from './helpers/context/ObservationsContext';

//hooks
import useUpdateObservations from './AppHooks/useUpdateObservations';
import useThresholdSetter from './AppHooks/useThresholdSetter';

const App = () => {
    const [newData, setNewData] = useState();
    const [currentDate, observations] = useUpdateObservations(newData);
    const [maxThreshold, setMaxThreshold, showMaxThreshold, minThreshold, setMinThreshold, showMinThreshold] = useThresholdSetter(newData);

    useEffect(() => {//set up socket connection
        const socket = io('http://localhost:3000');
        socket.on('data',setNewData);
        return () => socket.emit('disconnect');
    },[]);
    
    return (
        <>
            <ObservationsContext.Provider value={observations}>
                <Meta 
                    currentDate={currentDate} 
                    numberOfObservations={observations.length}
                />
                <ThresholdController
                    maxThreshold={maxThreshold}
                    setMaxThreshold={setMaxThreshold}
                    showMaxThreshold={showMaxThreshold}
                    minThreshold={minThreshold}
                    showMinThreshold={showMinThreshold}
                    setMinThreshold={setMinThreshold}
                />
                <LineChartContainer 
                    maxThreshold={maxThreshold} 
                    minThreshold={minThreshold} 
                    showMaxThreshold={showMaxThreshold} 
                    showMinThreshold={showMinThreshold}
                />
                <HistogramContainer 
                    maxThreshold={maxThreshold} 
                    minThreshold={minThreshold} 
                    showMaxThreshold={showMaxThreshold} 
                    showMinThreshold={showMinThreshold}
                />
            </ObservationsContext.Provider>
        </>
    );
};

export default App;