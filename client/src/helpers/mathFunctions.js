//sort array in ascending order - mostly for calculating percentiles
export const ascending = (array=[]) => {
    if(Array.isArray(array)) {
        if (array.length > 0) {
            if (typeof array[0] === 'object') {
                if (typeof array[0].value !== 'undefined') {
                    return [...array].sort((prev, next) => prev.value - next.value);
                } else {
                    return 'array has objects with unknown fields in it';
                }
            } else {
                return [...array].sort((prev, next) => prev - next);
            }
        } else {
            return 'didn\'t pass an array or array was empty';
        }
    } else {
        return 'function called with something other than an array';
    }
}

//sort array in descending order
export const descending = array => {
    if (array.length > 0) {
		if (typeof array[0] === 'object') {
			if (array[0].value !== 'undefined') {
                return [...array].sort((prev, next) => next.value - prev.value);
            }
        } else {
            return [...array].sort((prev, next) => next - prev);
        }
    }
}

//get sum of array values
export const sum = array => {
	if (array.length > 0) {
		if (typeof array[0] === 'object') {
			if (array[0].value !== 'undefined') {
				return array.reduce((sum, { value }) => sum + value, 0);
			}
		} else {
			return array.reduce((sum, value) => sum + value, 0);
		}
	}
};

//get average of array values
export const mean = array => {
    if(array.length > 0) {
        return sum(array)/array.length;
    }
}

//get standard deviation of array values
export const stDev = array => {
    if (array.length > 12) {//want a decent sample size, otherwise not much meaning in standard deviation
        const mean = mean(array);
        
        if (typeof array[0] === 'object') {
			if (array[0].value !== 'undefined') {
                const sqDiffArray = array.map(({value}) => (value - mean)**2);
				return Math.sqrt(sum(sqDiffArray) / (array.length -1));
			}
		} else {
            const sqDiffArray = array.map(value => (value - mean)**2);
            return Math.sqrt(sum(sqDiffArray) / (array.length -1));
		}   
    } else {
        return 'need bigger sample size'
    }
}

//get percentile of array - actual observations calculated
const percentile = (array, q) => {
    const sortedArray = ascending(array);
    const positionRaw = (sortedArray.length - 1) * q;
    const nearestActualPosition = Math.floor(positionRaw);
    if (typeof array[0] === 'object') {
        if (array[0].value !== 'undefined') {
            return sortedArray[nearestActualPosition].value;
        }
    } else {
        return sortedArray[nearestActualPosition];
    }
}

//partial application functions to generate quartiles
export const calculatePercentile25 = array => percentile(array, 0.25);
export const calculatePercentile50 = array => percentile(array, 0.5);
export const calculatePercentile75 = array => percentile(array, 0.75);