import React from 'react';

const AlertCard = ({newViolation: {time, date, value}, setShowAlert}) => {
    return (
        <div onClick={() => setShowAlert(false)}>
            <div>Last Violation: {value}</div>
            <div>@ {time}</div>
            <div>on {date}</div>
        </div>
    );
}

export default AlertCard;