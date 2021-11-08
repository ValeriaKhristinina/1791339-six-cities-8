/* eslint-disable no-console */
import {ThunkActionResult} from '../types/action';
import { Offer } from '../types/offer';
import { AuthData } from '../types/auth-data';
import { APIRoute , AuthorizationStatus } from '../const';
import { addOffers, getEmail, requireAuthorisation, requireLogout } from './action';
import { dropToken, saveToken, Token } from '../services/token';
const AUTH_FAIL_MESSAGE = 'Не забудьте авторизоваться';
export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, getState, api): Promise<void> => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(addOffers(data));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorisation(AuthorizationStatus.Auth));
    } catch {
      console.log(AUTH_FAIL_MESSAGE);
    }
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
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

