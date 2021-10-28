import {ThunkActionResult} from '../types/action';
import { Offer } from '../types/offer';
import { APIRoute } from '../const';
import { addOffers } from './action';
// import { saveToken, Token } from '../services/token';

// const AUTH_FAIL_MESSAGE = 'Не забудьте авторизоваться';

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, getState, api): Promise<void> => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(addOffers(data));
  };

// export const checkAuthAction = (): ThunkActionResult =>
//   async (dispatch, _getState, api) => {
//     try {
//       await api.get(APIRoute.Login);
//       dispatch(requireAuthorization(AuthorizationStatus.Auth));
//     } catch {
//       toast.info(AUTH_FAIL_MESSAGE);
//     }
//   };

// export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
//   async (dispatch, _getState, api) => {
//     const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
//     saveToken(token);
//     dispatch(requireAuthorization(AuthorizationStatus.Auth));
//     dispatch(redirectToRoute(AppRoute.Result));
//   };


// export const logoutAction = (): ThunkActionResult =>
//   async (dispatch, _getState, api) => {
//     api.delete(APIRoute.Logout);
//     dropToken();
//     dispatch(requireLogout());
//   };
// function redirectToRoute(Result: any): any {
//   throw new Error('Function not implemented.');
// }

