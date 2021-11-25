import { useEffect, useState } from 'react';
import leaflet, { Map, LayerGroup } from 'leaflet';
import { City } from '../types/offer';

type UseMap = {
  map: Map | null,
  markersLayer: LayerGroup | null
}
function useMap(mapRef: React.RefObject<HTMLElement | null>,
  mapCenter: City | undefined): UseMap {
  const [map, setMap] = useState<Map | null>(null);
  const [markersLayer, setMarkersLayer] = useState<LayerGroup | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null && mapCenter) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: mapCenter.location.latitude,
          lng: mapCenter.location.longitude,
        },
        zoom: mapCenter.location.zoom,
      });
      const markersGroup = leaflet.layerGroup([]);
      markersGroup.addTo(instance);
      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMarkersLayer(markersGroup);
      setMap(instance);
    } else if (map && mapCenter) {
      map.panTo(new leaflet.LatLng(mapCenter.location.latitude, mapCenter.location.longitude));
    }
  }, [mapRef, map, mapCenter]);

  return { map, markersLayer };
}

export default useMap;
