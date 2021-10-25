import {DEFAULT_CITY} from '../const';
import {offers} from '../mocks/offers';
import {State} from '../types/state';
import {ActionType, Actions} from '../types/action';

const initialState = {
  city: DEFAULT_CITY,
  offers: offers,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, city: action.payload};

    case ActionType.AddOffers:
      return {...state, offers: action.payload};

    default:
      return state;
  }
};

export {reducer};
