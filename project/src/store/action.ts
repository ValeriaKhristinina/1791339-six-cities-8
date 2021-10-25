import {ActionType, ChangeCityAction, AddOffersAction} from '../types/action';
import { Offers } from '../types/offer';

export const changeCity = (city: string): ChangeCityAction => ({
  type: ActionType.ChangeCity,
  payload: city,
});

export const addOffers = (offers: Offers): AddOffersAction => ({
  type: ActionType.AddOffers,
  payload: offers,
});
