import { useEffect, useState } from 'react';

const useThresholdSetter = (newData) => {
    const [maxThreshold, setMaxThreshold] = useState();
    const [showMaxThreshold, setShowMaxThreshold] = useState(false);
    const [minThreshold, setMinThreshold] = useState();
    const [showMinThreshold, setShowMinThreshold] = useState(false);

    return [maxThreshold, setMaxThreshold, showMaxThreshold, minThreshold, setMinThreshold, showMinThreshold];
}

export default useThresholdSetter;