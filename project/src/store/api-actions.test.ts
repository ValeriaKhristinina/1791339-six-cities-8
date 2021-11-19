
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createAPI} from '../services/api';
import {checkAuthAction, fetchOffersAction, fetchCommentsAction, fetchNearbyOffersAction, loginAction, logoutAction} from './api-actions';
import {APIRoute, AuthorizationStatus} from '../const';
import {State} from '../types/state';
import {addComments, addNearbyOffers, addOffers, getEmail, requireAuthorization, requireLogout} from './action';
import {makeFakeComment, makeFakeOffer} from '../utils/mocks';
import {adaptCommentsToServer, adaptOfferToServer} from '../services/adapters';
import { AuthData } from '../types/auth-data';

describe('Async actions', () => {
  const onFakeUnauthorized = jest.fn();
  const api = createAPI(onFakeUnauthorized());
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    expect(store.getActions()).toEqual([
      requireAuthorization(AuthorizationStatus.Auth),
    ]);
  });

  it('should dispatch RequriedAuthorization and RedirectToRoute when POST /login', async () => {
    const fakeUser: AuthData = {login: 'test@test.ru', password: '123456'};
    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, {token: 'secret'});

    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    expect(store.getActions()).toEqual([
      requireAuthorization(AuthorizationStatus.Auth),
      getEmail(fakeUser.login),
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('6-cities-token', 'secret');
  });

  it('should dispatch Logout when Delete /logout', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    expect(store.getActions()).toEqual([requireLogout()]);
    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('6-cities-token');
  });

  it('should dispatch addOffers when GET /hotels', async () => {
    const mockOffers = new Array(3).fill(null).map(()=>(makeFakeOffer()));
    const mockServerOffers = mockOffers.map((offer)=> adaptOfferToServer(offer));

    mockAPI
      .onGet(APIRoute.Offers)
      .reply(200, mockServerOffers);

    const store = mockStore();
    await store.dispatch(fetchOffersAction());

    expect(store.getActions()).toEqual([
      addOffers(mockOffers),
    ]);
  });

  it('should dispatch addComments when GET /comments', async () => {
    const mockComments = new Array(3).fill(null).map(()=>(makeFakeComment()));
    const mockServerComments = mockComments.map((comment)=> adaptCommentsToServer(comment));

    mockAPI
      .onGet(`${APIRoute.Comments}/1`)
      .reply(200, mockServerComments);

    const store = mockStore();
    await store.dispatch(fetchCommentsAction('1'));

    expect(store.getActions()).toEqual([
      addComments(mockComments),
    ]);
  });

  it('should dispatch nearbyOffers when GET /comments', async () => {
    const mockOffers = new Array(3).fill(null).map(()=>(makeFakeOffer()));
    const mockServerOffers = mockOffers.map((offer)=> adaptOfferToServer(offer));

    mockAPI
      .onGet(`${APIRoute.Offers}/1${APIRoute.NearbyOffers}`)
      .reply(200, mockServerOffers);

    const store = mockStore();
    await store.dispatch(fetchNearbyOffersAction('1'));

    expect(store.getActions()).toEqual([
      addNearbyOffers(mockOffers),
    ]);
  });
});
