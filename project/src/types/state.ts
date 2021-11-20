import { Offers } from './offer';
import {AuthorizationStatus} from '../const';
import { RootState } from '../store/root-reducer';
import { Reviews } from './review';

export type AppData = {
  offers: Offers,
  comments: Reviews,
  isDataLoaded: boolean,
  nearbyOffers: Offers,
  favoritesOffers: Offers,
}

export type CityProcess = {
  city: string,
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  userEmail: string,
}

export type State = RootState;
