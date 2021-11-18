import {userProcess} from './user-process';
import {AuthorizationStatus} from '../../const';
import {getEmail, requireAuthorisation, requireLogout} from '../action';
import {makeFakeEmail} from '../../utils/mocks';

const fakeEmail = makeFakeEmail();

describe('Reducer: userProcess', () => {
  it('sould change Authorization status on "AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.Unknown, userEmail: ''};
    expect(userProcess(state, requireAuthorisation(AuthorizationStatus.Auth)))
      .toEqual({authorizationStatus: AuthorizationStatus.Auth, userEmail: ''});
  });

  it('sould change Authorization status on "NO_AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.Auth, userEmail: fakeEmail};
    expect(userProcess(state, requireLogout()))
      .toEqual({authorizationStatus: AuthorizationStatus.NoAuth, userEmail: ''});
  });

  it('sould get user email', () => {
    const state = {authorizationStatus: AuthorizationStatus.Auth, userEmail: ''};
    expect(userProcess(state, getEmail(fakeEmail)))
      .toEqual({authorizationStatus: AuthorizationStatus.Auth, userEmail: fakeEmail});
  });
});
