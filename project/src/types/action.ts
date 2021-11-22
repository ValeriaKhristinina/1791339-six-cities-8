import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';
import {
  AxiosInstance
} from 'axios';
import {changeCity , addOffers, requireAuthorization, requireLogout, getUser, addComments, addNearbyOffers, addFavoritesOffers, updateOfferFavoriteStatus, sortOffersBy} from '../store/action';
import { State } from './state';


export enum ActionType {
  ChangeCity = 'city/changeCity',
  AddOffers = 'data/addOffers',
  AddComments = 'data/addComments',
  AddNearbyOffers = 'data/addNearbyOffers',
  AddFavoritesOffers = 'data/addFavoritesOffers',
  UpdateOfferFavoriteStatus = 'data/updateOfferFavoriteStatus',
  SortOffersBy = 'data/sortOffersBy',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  GetUser = 'user/getUser',
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof addOffers>
  | ReturnType<typeof addComments>
  | ReturnType<typeof addNearbyOffers>
  | ReturnType<typeof addFavoritesOffers>
  | ReturnType<typeof updateOfferFavoriteStatus>
  | ReturnType<typeof sortOffersBy>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof getUser>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
