import {ActionType} from '../types/action';
import { Offers } from '../types/offer';
import { AuthorizationStatus } from '../const';

export const changeCity = (city: string)  => ({
  type: ActionType.ChangeCity,
  payload: city,
} as const);

export const addOffers = (offers: Offers) => ({
  type: ActionType.AddOffers,
  payload: offers,
} as const);

export const requireAuthorisation = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAutorisation,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);
