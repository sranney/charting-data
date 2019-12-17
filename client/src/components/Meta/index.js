import React from 'react';

const Meta = ({currentDate,numberOfObservations}) => (
    <div>
        <div>Current Date Observed: {currentDate}</div>
        <div>Number of Total Observations: {numberOfObservations}</div>
    </div>
);

export default Meta;