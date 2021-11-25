import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {Offers, Offer} from '../../types/offer';
import { Reviews } from '../../types/review';
import { Sorting } from '../../const';

export const getOffers = (state: State): Offers => state[NameSpace.Data].offers;
export const getOfferById = (state: State, id: string): Offer | undefined => getOffers(state).find((offer: Offer) => offer.id.toString() === id);
export const getComments = (state: State): Reviews => state[NameSpace.Data].comments;
export const getFavoritesOffersByCity = (state: State): Array<{city:string, offers:Offers}> => {
  const favoriteOffers = state[NameSpace.Data].favoritesOffers;
  const cityMap: {
    [city: string]: Offers;
  } = {};

  favoriteOffers.forEach((offer) => {
    const cityName = offer.city.name;
    if(!cityMap[cityName]) {
      cityMap[cityName] = [];
    }

    cityMap[cityName].push(offer);
  });

  return Object.keys(cityMap).map((city) => ({city, offers:cityMap[city]}));

};
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
export const getFilteredByCityOffers = (state: State): Offers => {
  const filteredOffers = state[NameSpace.Data].offers.filter((offer) => offer.city.name === state[NameSpace.City].city);
  const sortBy = state[NameSpace.Data].sortBy;
  switch(sortBy) {
    case Sorting.Popular:
      return filteredOffers;
    case Sorting.PriceHighToLow:
      return filteredOffers.sort((a,b) => {
        if(a.price > b.price) {
          return -1;
        } else if (a.price < b.price) {
          return 1;
        }
        return 0;
      });
    case Sorting.PriceLowToHigh:
      return filteredOffers.sort((a,b) => {
        if(a.price > b.price) {
          return 1;
        } else if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
    case Sorting.Rating:
      return filteredOffers.sort((a,b) => {
        if(a.rating > b.rating) {
          return -1;
        } else if (a.rating < b.rating) {
          return 1;
        }
        return 0;
      });
    default:
      return filteredOffers;
  }
};
export const getNearbyOffers = (state: State): Offers => state[NameSpace.Data].nearbyOffers;
export const getSortBy = (state: State): Sorting => state[NameSpace.Data].sortBy;
