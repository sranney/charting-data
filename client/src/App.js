import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

//styled components
import {DateContainer} from './styles';

//components
import LineChartContainer from './components/LineChartContainer';
import HistogramContainer from './components/HistogramContainer';
import SocketController from './components/SocketController';

//context api
import ObservationsContext from './helpers/context/ObservationsContext';

//hooks
import {useUpdateObservations} from './AppHooks/useUpdateObservations';

const App = () => {
    const [newData, setNewData] = useState();
    const [currentDate, observations] = useUpdateObservations(newData);

    useEffect(() => {//set up socket connection
        const socket = io('http://localhost:3000');
        socket.on('data',setNewData);
        return () => socket.emit('disconnect');
    },[]);
    
    return (
        <>
            <ObservationsContext.Provider value={observations}>
                <DateContainer>Current Date Observed: {currentDate}</DateContainer>
                <LineChartContainer/>
                <HistogramContainer/>
            </ObservationsContext.Provider>
        </>
    );
};

export default App;