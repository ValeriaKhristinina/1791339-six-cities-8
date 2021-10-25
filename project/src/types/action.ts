import { Offers } from './offer';

export enum ActionType {
  ChangeCity = 'city/changeCity',
  AddOffers = 'offers/addOffers',
}

export type ChangeCityAction = {
  type: ActionType.ChangeCity;
  payload: string;
}

export type AddOffersAction = {
  type: ActionType.AddOffers;
  payload: Offers;
}

export type Actions = ChangeCityAction | AddOffersAction;
