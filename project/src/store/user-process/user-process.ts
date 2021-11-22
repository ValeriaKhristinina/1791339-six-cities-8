import { AuthorizationStatus } from '../../const';
import {ActionType, Actions} from '../../types/action';
import {UserProcess} from '../../types/state';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: {
    avatarUrl: '',
    email: '',
    id: 0,
    isPro: false,
    name: '',
    token: '',
  },
};

const userProcess = (state = initialState, action: Actions): UserProcess => {
  switch (action.type) {
    case ActionType.RequireAuthorization: {
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    }
    case ActionType.RequireLogout:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NoAuth,
        user: {
          avatarUrl: '',
          email: '',
          id: 0,
          isPro: false,
          name: '',
          token: '',
        },
      };

    case ActionType.GetUser:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export {userProcess};
