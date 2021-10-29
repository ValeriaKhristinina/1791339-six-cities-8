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

// export const citiesList = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

// export const MAP_CENTER = {
//   name: 'Amsterdam',
//   latitude: 52.3779562,
//   longitude: 4.897070,
//   zoom: 10,
// };

export const CITIES: City[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 10,
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.933594,
      longitude: 6.961899,
      zoom: 10,
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.8465573,
      longitude: 4.351697,
      zoom: 10,
    },
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.3779562,
      longitude: 4.897070,
      zoom: 10,
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 10,
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: 10,
    },
  },
];

export const findMapCenter = (cityName: string): City | undefined => CITIES.find((city) => city.name === cityName);

export const URL_MARKER_DEFAULT = '/img/pin.svg';

export const URL_MARKER_ACTIVE = '/img/pin-active.svg';

export const DEFAULT_CITY = CITIES[0].name;

export enum APIRoute {
  Offers = '/hotels',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
}

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;
