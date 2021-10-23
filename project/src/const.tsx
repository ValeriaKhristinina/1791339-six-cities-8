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

export const citiesList = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const MAP_CENTER = {
  title: 'Amsterdam',
  lat: 52.3779562,
  lng: 4.897070,
  zoom: 10,
};

export const URL_MARKER_DEFAULT = '/img/pin.svg';

export const URL_MARKER_ACTIVE = '/img/pin-active.svg';

export const DEFAULT_CITY = 'Amsterdam';
