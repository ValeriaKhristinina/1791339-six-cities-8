import {ThunkActionResult} from '../types/action';
import { AuthData } from '../types/auth-data';
import { APIRoute , AuthorizationStatus } from '../const';
import { addComments, addFavoritesOffers, addNearbyOffers, addOffers, getEmail, requireAuthorization, requireLogout, updateOfferFavoriteStatus } from './action';
import { dropToken, saveToken, Token } from '../services/token';
import { CommentPost, ServerReviewType } from '../types/review';
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
    dispatch(addComments(data.map((dataItem) => adaptCommentsToClient(dataItem))));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      // eslint-disable-next-line no-console
      console.log(AUTH_FAIL_MESSAGE);
    }
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(getEmail(email));
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

export const fetchFavoritesOffersAction = (): ThunkActionResult =>
  async (dispatch, getState, api): Promise<void> => {
    const {data} = await api.get<ServerOffer[]>(APIRoute.Favorite);
    dispatch(addFavoritesOffers(data.map((dataItem) => adaptOfferToClient(dataItem))));
  };

export const changeFavoriteStatusAction = (hotelId: number, isFavorite: boolean): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.post<{token: Token}>(`${APIRoute.Favorite}/${hotelId}/${isFavorite ? 1 : 0 }`);
    dispatch(updateOfferFavoriteStatus(hotelId, isFavorite));
  };

export const postComment = (id: string, comment: CommentPost): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.post<ServerReviewType[]>(`${APIRoute.Comments}/${id}`, comment);
    dispatch(addComments(data.map((dataItem) => adaptCommentsToClient(dataItem))));
  };

