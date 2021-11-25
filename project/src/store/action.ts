import {ActionType} from '../types/action';
import { Offers } from '../types/offer';
import { AuthorizationStatus, Sorting } from '../const';
import { ReviewType } from '../types/review';
import {User} from '../types/user';

export const changeCity = (city: string)  => ({
  type: ActionType.ChangeCity,
  payload: city,
} as const);

export const addOffers = (offers: Offers) => ({
  type: ActionType.AddOffers,
  payload: offers,
} as const);

export const addComments = (comments: ReviewType[]) => ({
  type: ActionType.AddComments,
  payload: comments,
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export const getUser = (user: User) => ({
  type: ActionType.GetUser,
  payload: user,
} as const);

export const addNearbyOffers = (nearbyOffers: Offers) => ({
  type: ActionType.AddNearbyOffers,
  payload: nearbyOffers,
} as const);

export const addFavoritesOffers = (favoritesOffers: Offers) => ({
  type: ActionType.AddFavoritesOffers,
  payload: favoritesOffers,
} as const);

export const updateOfferFavoriteStatus = (offerId: number, isFavorite: boolean) => ({
  type: ActionType.UpdateOfferFavoriteStatus,
  payload: {offerId, isFavorite},
} as const);

export const sortOffersBy = (sortBy: Sorting ) => ({
  type: ActionType.SortOffersBy,
  payload: sortBy,
} as const);
