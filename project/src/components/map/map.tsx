/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { MapCenter } from '../../types/map-center';
import { URL_MARKER_DEFAULT, URL_MARKER_ACTIVE } from '../../const';
import { Offers, Offer } from '../../types/offer';

type MapProps = {
  mapCenter: MapCenter;
  points: Offers;
  selectedOffer?: Offer;
  setAdditionalClass: string;
}

function Map({ setAdditionalClass, mapCenter, points, selectedOffer }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, mapCenter);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const activeCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_ACTIVE,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  console.log(map, activeCustomIcon);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          }, {
            icon: (selectedOffer !== undefined && point.title === selectedOffer.title)
              ? activeCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points, defaultCustomIcon, activeCustomIcon, selectedOffer]);

  return (
    <section
      className={`${setAdditionalClass} map`}
      ref={mapRef}

    >
    </section>
  );
}

export default Map;
