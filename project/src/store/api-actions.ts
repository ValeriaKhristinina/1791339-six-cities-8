/* eslint-disable no-console */
import {ThunkActionResult} from '../types/action';
import { Offer } from '../types/offer';
import { AuthData } from '../types/auth-data';
import { APIRoute , AuthorizationStatus } from '../const';
import { addComments, addNearbyOffers, addOffers, getEmail, requireAuthorisation, requireLogout } from './action';
import { dropToken, saveToken, Token } from '../services/token';
import { ReviewType } from '../types/review';

const AUTH_FAIL_MESSAGE = 'Не забудьте авторизоваться';

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, getState, api): Promise<void> => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(addOffers(data));
  };

export const fetchCommentsAction = (id: string): ThunkActionResult =>
  async (dispatch, getState, api): Promise<void> => {
    const {data} = await api.get<ReviewType[]>(`${APIRoute.Comments}/${id}`);
    console.log(data);
    dispatch(addComments(data));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.get(APIRoute.Login);
      console.log('1');
      dispatch(requireAuthorisation(AuthorizationStatus.Auth));
    } catch {
      console.log(AUTH_FAIL_MESSAGE);
    }
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    console.log('2');
    dispatch(requireAuthorisation(AuthorizationStatus.Auth));
    dispatch(getEmail(email));
    console.log('email:', email);
  };


export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };

export const fetchNearbyOffersAction = (id: string): ThunkActionResult =>
  async (dispatch, getState, api): Promise<void> => {
    const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${id}${APIRoute.NearbyOffers}`);
    dispatch(addNearbyOffers(data));
  };

