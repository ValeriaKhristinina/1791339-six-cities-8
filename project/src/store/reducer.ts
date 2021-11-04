import {DEFAULT_CITY, AuthorizationStatus} from '../const';
import {State} from '../types/state';
import {ActionType, Actions} from '../types/action';

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, city: action.payload};

    case ActionType.AddOffers: {
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    }

    case ActionType.RequireAutorisation: {
      return {
        ...state,
        authorizationStatus: action.payload,
        isDataLoaded: true,
      };
    }

    case ActionType.RequireLogout:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NoAuth,
      };

    default:
      return state;
  }
};

export {reducer};
