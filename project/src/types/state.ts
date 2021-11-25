import { Offers } from './offer';
import {AuthorizationStatus, Sorting} from '../const';
import { RootState } from '../store/root-reducer';
import { Reviews } from './review';
import { User } from './user';

export type AppData = {
  offers: Offers,
  comments: Reviews,
  sortBy: Sorting
  isDataLoaded: boolean,
  nearbyOffers: Offers,
  favoritesOffers: Offers,
}

export type CityProcess = {
  city: string,
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  user: User,
}

export type State = RootState;
