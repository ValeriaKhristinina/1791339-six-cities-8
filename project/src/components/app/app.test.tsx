import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { makeFakeComment, makeFakeEmail, makeFakeOffer } from '../../utils/mocks';
import { AppRoute, AuthorizationStatus } from '../../const';
import thunk from 'redux-thunk';
import App from './app';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);
const fakeOffers = new Array(5).fill(null).map(() => makeFakeOffer());
const fakeComments = new Array(5).fill(null).map(() => makeFakeComment());
const fakeEmail = makeFakeEmail();

const store = mockStore({
  DATA: {
    offers: fakeOffers,
    comments: fakeComments,
    isDataLoaded: true,
    nearbyOffers: fakeOffers,
  },
  USER: {
    authorizationStatus: AuthorizationStatus.Auth,
    userEmail: fakeEmail,
  },
  CITY: {
    city: 'Paris',
  },
});

const history = createMemoryHistory();
const fakeApp = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "MainPage" when user navigate to "/"', () => {
    history.push(AppRoute.Root);
    render(fakeApp);

    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
  });

  it('should render "LoginPage" when user navigate to "/login"', () => {
    history.push(AppRoute.Login);
    render(fakeApp);

    expect(screen.getByLabelText(/mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it('should render "FavoritesPage" when user navigate to "/favorites"', () => {
    history.push(AppRoute.Favorites);
    render(fakeApp);

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  });

  it('should render "RoomPage" when user navigate to "/offer/:id"', () => {
    history.push(`/offer/${fakeOffers[0].id}`);
    render(fakeApp);

    expect(screen.getByText(/To bookmarks/i)).toBeInTheDocument();
  });

  it('should render "ErrorPage" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');
    render(fakeApp);

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Page not found')).toBeInTheDocument();
  });
});
