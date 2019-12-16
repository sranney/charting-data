import {
	ascending,
	descending,
	sum,
	mean,
	stDev,
	calculatePercentile25,
	calculatePercentile50,
	calculatePercentile75
} from '../../helpers/mathFunctions';

describe('ascending function', () => {
    it('returns error message if function called with something other than an array', () => {
        const passedData = 'abcde';
        const receivedData = ascending(passedData);
        const expectedResult = 'function called with something other than an array';

        expect(receivedData).toBe(expectedResult);
    });
    it('returns error message if function called with an empty array - due to default value', () => {
        const passedData = undefined;
        const receivedData = ascending(passedData);
        const expectedResult = 'didn\'t pass an array or array was empty';

        expect(receivedData).toBe(expectedResult);
    });
    it('returns error message if function called with an empty array - due to empty array passed', () => {
        const passedData = [];
        const receivedData = ascending(passedData);
        const expectedResult = 'didn\'t pass an array or array was empty';

        expect(receivedData).toBe(expectedResult);
    });
    it('returns error message if function called with an array of objects with unrecognized structure - doesn\'t have value field', () => {
        const passedData = [{somethingUnexpected:'whoa'}];
        const receivedData = ascending(passedData);
        const expectedResult = 'array has objects with unknown fields in it';

        expect(receivedData).toBe(expectedResult);
    });
    it('returns sorted object array when array filled with objects with field value', () => {
        const passedData = [{value: 5, timeString: '10:00 AM'},{value:2, timeString: '10:01AM'},{value: 10, timeString: '10:02'}];
        const receivedData = ascending(passedData);
        const expectedResult = [{value:2, timeString: '10:01AM'},{value: 5, timeString: '10:00 AM'},{value: 10, timeString: '10:02'}];

        expect(receivedData).toStrictEqual(expectedResult);
    });
    it('returns sorted object array when array filled with numbers', () => {
        const passedData = [5,2,10];
        const receivedData = ascending(passedData);
        const expectedResult = [2,5,10];
        expect(receivedData).toStrictEqual(expectedResult);
    });
})