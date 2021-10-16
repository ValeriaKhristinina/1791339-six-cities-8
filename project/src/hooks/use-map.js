/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {useEffect, useState} from 'react';
import leaflet from 'leaflet';

function useMap(mapRef, mapCenter) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: mapCenter.lat,
          lng: mapCenter.lng,
        },
        zoom: mapCenter.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
    }
  }, [mapRef, map, mapCenter]);

  return map;
}

export default useMap;
