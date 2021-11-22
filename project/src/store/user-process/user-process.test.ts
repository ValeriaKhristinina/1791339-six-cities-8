import {userProcess} from './user-process';
import {AuthorizationStatus} from '../../const';
import {getUser, requireAuthorization, requireLogout} from '../action';
import {makeFakeUser} from '../../utils/mocks';

const fakeUser = makeFakeUser();

describe('Reducer: userProcess', () => {
  it('should change Authorization status on "AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.Unknown, user: {
      avatarUrl: '',
      email: '',
      id: 0,
      isPro: false,
      name: '',
      token: '',
    }};
    expect(userProcess(state, requireAuthorization(AuthorizationStatus.Auth)).authorizationStatus)
      .toEqual(AuthorizationStatus.Auth);
  });

  it('should change Authorization status on "NO_AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.Auth, user: fakeUser};
    expect(userProcess(state, requireLogout()))
      .toEqual({authorizationStatus: AuthorizationStatus.NoAuth, user: {
        avatarUrl: '',
        email: '',
        id: 0,
        isPro: false,
        name: '',
        token: '',
      }});
  });

  it('should get user info', () => {
    const state = {authorizationStatus: AuthorizationStatus.Auth, user: {

    }};
    expect(userProcess(state, getUser(fakeUser)))
      .toEqual({authorizationStatus: AuthorizationStatus.Auth, user: fakeUser});
  });
});
