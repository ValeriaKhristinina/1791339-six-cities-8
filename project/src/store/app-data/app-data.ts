import {ActionType, Actions} from '../../types/action';
import {AppData} from '../../types/state';

const initialState: AppData = {
  offers: [],
  comments: [],
  isDataLoaded: false,
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
    default:
      return state;
  }
};

export {appData};
