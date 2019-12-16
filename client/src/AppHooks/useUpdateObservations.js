import { useEffect, useState } from 'react';

export const useUpdateObservations = (newData) => {
	const [currentDate, setCurrentDate] = useState('');
	const [observations, setObservations] = useState([]);

	useEffect(() => {
		if (newData) {
			const { timestamp, value } = newData;
			const dateString = new Date(timestamp).toLocaleDateString();
			const timeString = new Date(timestamp).toLocaleTimeString();
			setCurrentDate(dateString);
			setObservations(observations => [
				...observations,
				{ time: timeString, value }
			]);
		}
    }, [newData]);
    
    return [currentDate, observations];
};