import { useUpdateObservations } from '../../AppHooks/useUpdateObservations';
import {renderHook, act} from '@testing-library/react-hooks';

describe('useUpdateObservations', () => {
    it('should return an empty array and no date when nothing has been passed into the useUpdateObservations hook', () => {
        const {result} = renderHook(()=>useUpdateObservations(undefined));
        expect(result.current.observations).toBe([]);
    })
})