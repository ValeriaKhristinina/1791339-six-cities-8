import {changeCity , addOffers, requireAuthorization, requireLogout} from '../store/action';

export enum ActionType {
  ChangeCity = 'city/changeCity',
  AddOffers = 'data/addOffers',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
}

export type Actions = ReturnType<typeof changeCity> | ReturnType<typeof addOffers> | ReturnType<typeof requireAuthorization> | ReturnType<typeof requireLogout>;
