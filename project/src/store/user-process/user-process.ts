import { AuthorizationStatus } from '../../const';
import {ActionType, Actions} from '../../types/action';
import {UserProcess} from '../../types/state';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: '',
};

const userProcess = (state = initialState, action: Actions): UserProcess => {
  switch (action.type) {
    case ActionType.RequireAutorisation: {
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    }
    case ActionType.RequireLogout:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NoAuth,
        userEmail: '',
      };

    case ActionType.GetEmail:
      return {
        ...state,
        userEmail: action.payload,
      };

    default:
      return state;
  }
};

export {userProcess};
