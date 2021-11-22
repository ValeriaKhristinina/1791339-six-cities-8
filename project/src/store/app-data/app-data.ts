import { SORT } from '../../const';
import {ActionType, Actions} from '../../types/action';
import { Offer } from '../../types/offer';
import {AppData} from '../../types/state';

const initialState: AppData = {
  offers: [],
  sortBy: SORT.Popular,
  comments: [],
  isDataLoaded: false,
  nearbyOffers: [],
  favoritesOffers: [],
};

const appData = (state = initialState, action: Actions): AppData => {
  switch (action.type) {
    case ActionType.AddOffers: {
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    }
    case ActionType.AddComments: {
      return {
        ...state,
        comments: action.payload,
      };
    }
    case ActionType.AddNearbyOffers: {
      return {
        ...state,
        nearbyOffers: action.payload,
      };
    }
    case ActionType.AddFavoritesOffers: {
      return {
        ...state,
        favoritesOffers: action.payload,
      };
    }
    case ActionType.UpdateOfferFavoriteStatus: {
      const updateOffer = (offer: Offer)=>{
        if(offer.id === action.payload.offerId){
          return {
            ...offer,
            isFavorite: action.payload.isFavorite,
          };
        }
        return offer;
      };
      return {
        ...state,
        offers: state.offers.map(updateOffer),
        nearbyOffers: state.nearbyOffers.map(updateOffer),
        favoritesOffers: state.favoritesOffers.map(updateOffer),
      };
    }
    case ActionType.SortOffersBy: {
      return {
        ...state,
        sortBy: action.payload,
      };
    }
    default:
      return state;
  }
};

export {appData};
