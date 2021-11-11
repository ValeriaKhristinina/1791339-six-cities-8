import {ActionType, Actions} from '../../types/action';
import {AppData} from '../../types/state';

const initialState: AppData = {
  offers: [],
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
    default:
      return state;
  }
};

export {appData};
