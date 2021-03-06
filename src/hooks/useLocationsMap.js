/* global google */
import { useEffect, useRef, useState } from 'react';
import { useSetMarkers } from './useSetMarkers';

export const useLocationsMap = () => {
    const ref = useRef(null);
    const [map, setMap] = useState(null);
    const setMarkers = useSetMarkers(map);

    useEffect(() => {
        if (ref.current && !map) {
            setMap(
                new google.maps.Map(ref.current, {
                    zoom: 0,
                    center: new google.maps.LatLng(0, 0),
                })
            );
        }

        if (map) {
            setMarkers();
        }
    }, [map, ref, setMarkers]);

    return { ref };
};
