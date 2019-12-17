import { useEffect, useState } from 'react';

const useUpdateObservations = (newData) => {
	const storedObservations = JSON.parse(window.localStorage.getItem('observations'));//set initial values with local storage data if available
	const [currentDate, setCurrentDate] = useState(storedObservations && storedObservations[storedObservations.length - 1].date || '');
	const [observations, setObservations] = useState(storedObservations || []);

	useEffect(() => {
		if (newData) {
			const { timestamp, value } = newData;
			const timeString = new Date(timestamp).toLocaleTimeString();
			const dateString = new Date(timestamp).toLocaleDateString();
			setCurrentDate(dateString);
			setObservations(observations => [
				...observations,
				{ time: timeString, date: dateString, value }
			]);
			window.localStorage.setItem(//push the new data into local storage array
				'observations',
				JSON.stringify(
					[
						...(JSON.parse(window.localStorage.getItem('observations'))||[]),
						{ time: timeString, date: dateString, value }
					]
				)
			);
		}
	}, [newData]);
    
    return [currentDate, observations];
};

export default useUpdateObservations;