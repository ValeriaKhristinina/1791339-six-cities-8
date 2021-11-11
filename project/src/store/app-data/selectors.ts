import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {Offers} from '../../types/offer';

export const getOffers = (state: State): Offers => state[NameSpace.data].offers;
export const getFavoritesOffers = (state: State): Offers => state[NameSpace.data].offers.filter((offer) => offer.isFavorite);
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.data].isDataLoaded;
export const getFilteredByCityOffers = (state: State): Offers => state[NameSpace.data].offers.filter((offer) => offer.city.name === state[NameSpace.city].city);
