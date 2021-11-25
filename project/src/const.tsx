import { City } from './types/offer';

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Offers = '/hotels',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  NearbyOffers = '/nearby',
}

const cityMapZoom = 13;

export const CITIES: City[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: cityMapZoom,
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.933594,
      longitude: 6.961899,
      zoom: cityMapZoom,
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.8465573,
      longitude: 4.351697,
      zoom: cityMapZoom,
    },
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.3779562,
      longitude: 4.897070,
      zoom: cityMapZoom,
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: cityMapZoom,
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: cityMapZoom,
    },
  },
];

export const findMapCenter = (cityName: string): City | undefined => CITIES.find((city) => city.name === cityName);

export const MARKERS_SRC = {
  urlMarkeDefault: '/img/pin.svg',
  urlMarkerActive: '/img/pin-active.svg',
};

export const DEFAULT_CITY = CITIES[0].name;

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export enum Sorting {
  Popular = 'POPULAR',
  Rating = 'RATING',
  PriceLowToHigh = 'PRICE_LOW_TO_HIGH',
  PriceHighToLow = 'PRICE_HIGHT_TO_LOW',
}

export const SORTING_LIST = [{
  value: Sorting.Popular,
  title: 'Popular',
}, {
  value: Sorting.PriceLowToHigh,
  title: 'Price: low to hight',
}, {
  value: Sorting.PriceHighToLow,
  title: 'Price: hight to low',
}, {
  value: Sorting.Rating,
  title: 'Rating',
}];
