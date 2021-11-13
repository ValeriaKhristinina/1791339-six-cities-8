import { connect, ConnectedProps } from 'react-redux';
import { Switch, Route, Router } from 'react-router-dom';
import { AppRoute, isCheckedAuth } from '../../const';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../main-page/main-page';
import FavoritesPage from '../favorites-page/favorites-page';
import RoomPage from '../room-page/room-page';
import LoginPage from '../login-page/login-page';
import ErrorPage from '../error-page/error-page';
import { State } from '../../types/state';
import LoadingPage from '../loading-page/loading-page';
import BrowserHistory from '../../browser-history';
import { getOffers, getFavoritesOffers, getLoadedDataStatus } from '../../store/app-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';


const mapStateToProps = (state: State) => ({
  offers: getOffers(state),
  favoritesOffers: getFavoritesOffers(state),
  authorizationStatus: getAuthorizationStatus(state),
  isDataLoaded: getLoadedDataStatus(state),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props: PropsFromRedux): JSX.Element {
  const { offers, isDataLoaded, favoritesOffers, authorizationStatus } = props;

  if (!isDataLoaded || isCheckedAuth(authorizationStatus)) {
    return (
      <LoadingPage />
    );
  }
  return (
    <Router history={BrowserHistory}>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainPage />
        </Route>

        <Route render={({ history }) => <LoginPage onSubmitButtonClick={() => { history.push(AppRoute.Root); }} />} exact path={AppRoute.Login}></Route>

        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <FavoritesPage offers={favoritesOffers} />}
        >
        </PrivateRoute>

        <Route render={({ match }) => <RoomPage offerId={match.params.id} offers={offers} />} exact path={AppRoute.Room}></Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export { MainPage };
export default connector(App);
