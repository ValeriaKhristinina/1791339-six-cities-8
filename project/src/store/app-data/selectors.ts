import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {Offers, Offer} from '../../types/offer';
import { Reviews } from '../../types/review';

export const getOffers = (state: State): Offers => state[NameSpace.data].offers;
export const getOfferById = (state: State, id: string): Offer | undefined => getOffers(state).find((offer: Offer) => offer.id.toString() === id);
export const getComments = (state: State): Reviews => state[NameSpace.data].comments;
export const getFavoritesOffers = (state: State): Offers => state[NameSpace.data].offers.filter((offer) => offer.is_favorite);
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.data].isDataLoaded;
export const getFilteredByCityOffers = (state: State): Offers => state[NameSpace.data].offers.filter((offer) => offer.city.name === state[NameSpace.city].city);
export const getNearbyOffers = (state: State): Offers => state[NameSpace.data].nearbyOffers;
