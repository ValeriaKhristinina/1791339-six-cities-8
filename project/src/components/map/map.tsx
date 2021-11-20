/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useRef, useEffect, useState } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { URL_MARKER_DEFAULT, URL_MARKER_ACTIVE } from '../../const';
import { Offers, Offer, City } from '../../types/offer';

type MapProps = {
  mapCenter: City | undefined;
  points: Offers;
  selectedOffer?: Offer;
  setAdditionalClass: string;
}

function Map({ setAdditionalClass, mapCenter, points, selectedOffer }: MapProps): JSX.Element {
  const [markers, setMarkers] = useState<any[]>([]);
  const mapRef = useRef(null);
  const map = useMap(mapRef, mapCenter);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [30, 40],
    iconAnchor: [20, 40],
  });

  const activeCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_ACTIVE,
    iconSize: [30, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      markers.forEach((marker: any) => {
        marker.remove();
      });
      setMarkers([]);

      const arrMarkers: any = [];
      points.forEach((point) => {
        const marker = leaflet.marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        }, {
          icon: (selectedOffer !== undefined && point.id === selectedOffer.id)
            ? activeCustomIcon
            : defaultCustomIcon,
        });
        arrMarkers.push(marker);
        marker.addTo(map);
      });
      setMarkers(arrMarkers);
    }
  }, [map, points, selectedOffer]);

  return (
    <section
      className={`${setAdditionalClass} map`}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
