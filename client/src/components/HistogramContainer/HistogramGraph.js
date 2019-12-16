import React, { useEffect, useContext, useState } from 'react';
import * as d3 from 'd3';
import * as d3Array from 'd3-array';
import {ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

import ObservationsContext from '../../helpers/context/ObservationsContext';

const HistogramGraph = () => {
    const observations = useContext(ObservationsContext);
    const [binnedObservations, setBinnedObservations] = useState([]);
    const [minDomain, setMinDomain] = useState(-100);
    const [maxDomain, setMaxDomain] = useState(100);
    const [thresholds, setThresholds] = useState(10);

    useEffect(() => {
        if(observations.length > 0) {
            const valueArray = observations.map(({value})=>value);
            const bins = d3Array.bin().domain([minDomain, maxDomain]).thresholds(thresholds)(valueArray);
            setBinnedObservations(
                bins.reduce((accumulator,bin)=>{
                    return [...accumulator, {
                        observations: (bin.x0 + bin.x1)/2,
                        count: bin.length
                    }];
                },[])
            );
        }
    }, [observations, minDomain, maxDomain, thresholds]);


    return (
        <ResponsiveContainer width="100%" height={450}>
            <BarChart data={binnedObservations}>
                <XAxis dataKey="observations"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar isAnimationActive={false} dataKey="count" stroke="#0F609B"/>
            </BarChart>
        </ResponsiveContainer>
    )
};

export default HistogramGraph;