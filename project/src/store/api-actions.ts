/* eslint-disable no-console */
import {ThunkActionResult} from '../types/action';
import { AuthData } from '../types/auth-data';
import { APIRoute , AuthorizationStatus } from '../const';
import { addComments, addNearbyOffers, addOffers, getEmail, requireAuthorization, requireLogout } from './action';
import { dropToken, saveToken, Token } from '../services/token';
import { ServerReviewType } from '../types/review';
import {adaptCommentsToClient, adaptOfferToClient} from '../services/adapters';
import { ServerOffer } from '../types/server-offer';

const AUTH_FAIL_MESSAGE = 'Не забудьте авторизоваться';

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, getState, api): Promise<void> => {
    const {data} = await api.get<ServerOffer[]>(APIRoute.Offers);
    dispatch(addOffers(data.map((dataItem) => adaptOfferToClient(dataItem))));
  };

export const fetchCommentsAction = (id: string): ThunkActionResult =>
  async (dispatch, getState, api): Promise<void> => {
    const {data} = await api.get<ServerReviewType[]>(`${APIRoute.Comments}/${id}`);
    console.log(data);
    dispatch(addComments(data.map((dataItem) => adaptCommentsToClient(dataItem))));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.get(APIRoute.Login);
      console.log('1');
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      console.log(AUTH_FAIL_MESSAGE);
    }
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    console.log('2');
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
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
    const {data} = await api.get<ServerOffer[]>(`${APIRoute.Offers}/${id}${APIRoute.NearbyOffers}`);
    dispatch(addNearbyOffers(data.map((dataItem) => adaptOfferToClient(dataItem))));
  };

