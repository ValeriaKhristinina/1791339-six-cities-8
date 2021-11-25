import React, { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { MARKERS_SRC } from '../../const';
import { Offers, Offer, City } from '../../types/offer';


type MapProps = {
  mapCenter: City | undefined;
  points: Offers;
  selectedOffer?: Offer;
  setAdditionalClass: string;
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: MARKERS_SRC.urlMarkeDefault,
  iconSize: [30, 40],
  iconAnchor: [20, 40],
});

const activeCustomIcon = leaflet.icon({
  iconUrl: MARKERS_SRC.urlMarkerActive,
  iconSize: [30, 40],
  iconAnchor: [20, 40],
});

function Map({ setAdditionalClass, mapCenter, points, selectedOffer }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const { map, markersLayer } = useMap(mapRef, mapCenter);

  useEffect(() => {
    if (map && markersLayer) {
      points.forEach((point) => {
        const marker = leaflet.marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        }, {
          icon: (selectedOffer !== undefined && point.id === selectedOffer.id)
            ? activeCustomIcon
            : defaultCustomIcon,
        });

        markersLayer?.addLayer(marker);
      });
    }
  }, [map, points, markersLayer, selectedOffer]);

  return (
    <section
      className={`${setAdditionalClass} map`}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
