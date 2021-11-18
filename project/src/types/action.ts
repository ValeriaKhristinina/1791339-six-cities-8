import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';
import {
  AxiosInstance
} from 'axios';
import {changeCity , addOffers, requireAuthorization, requireLogout, getEmail, addComments, addNearbyOffers} from '../store/action';
import { State } from './state';


export enum ActionType {
  ChangeCity = 'city/changeCity',
  AddOffers = 'data/addOffers',
  AddComments = 'data/addComments',
  AddNearbyOffers = 'data/addNearbyOffers',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  GetEmail = 'user/getEmail',
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof addOffers>
  | ReturnType<typeof addComments>
  | ReturnType<typeof addNearbyOffers>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof getEmail>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
