import { Offers } from './offer';
import {AuthorizationStatus} from '../const';
import { RootState } from '../store/root-reducer';

export type AppData = {
  offers: Offers,
  isDataLoaded: boolean,
}

export type CityProcess = {
  city: string,
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  userEmail: string,
}

export type State = RootState;
