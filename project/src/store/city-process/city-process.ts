import { DEFAULT_CITY } from '../../const';
import {ActionType, Actions} from '../../types/action';
import {CityProcess} from '../../types/state';


const initialState: CityProcess = {
  city: DEFAULT_CITY,
};

const cityProcess = (state = initialState, action: Actions): CityProcess => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, city: action.payload};
    default:
      return state;
  }
};

export {cityProcess};
