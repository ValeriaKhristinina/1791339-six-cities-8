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
}

function Map({ mapCenter, points, selectedOffer }: MapProps): JSX.Element {
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
            lat: point.city.location.latitude,
            lng: point.city.location.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points, defaultCustomIcon]);

  return (
    <section
      className="cities__map map"
      ref={mapRef}

    >
    </section>
  );
}

export default Map;
