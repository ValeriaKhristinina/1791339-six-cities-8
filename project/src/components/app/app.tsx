import { connect, ConnectedProps } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../main-page/main-page';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import RoomPage from '../room-page/room-page';
import ErrorPage from '../error-page/error-page';
import { State } from '../../types/state';
import LoadingPage from '../loading-page/loading-page';


const mapStateToProps = (state: State) => ({
  offers: state.offers,
  favoritesOffers: state.offers,
  // authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props: PropsFromRedux): JSX.Element {
  const { offers, isDataLoaded, favoritesOffers } = props;

  if (!isDataLoaded) {
    return (
      <LoadingPage />
    );
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainPage />
        </Route>

        <Route exact path={AppRoute.Login}>
          <LoginPage />
        </Route>

        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <FavoritesPage offers={favoritesOffers} />}
          autorisationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>

        <Route exact path={AppRoute.Room}>
          <RoomPage
            offers={offers}
          />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export { MainPage };
export default connector(App);
