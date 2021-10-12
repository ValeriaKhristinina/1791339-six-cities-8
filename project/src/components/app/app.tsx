import { Switch, Route, BrowserRouter} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../main-page/main-page';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import RoomPage from '../room-page/room-page';
import ErrorPage from '../error-page/error-page';
import {Offers} from '../../types/offer';


type AppProps = {
  rentsCount: number;
  offers: Offers;
}

function App({rentsCount, offers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path= {AppRoute.Root}>
          <MainPage
            rentsCount={rentsCount}
            offers={offers}
          />
        </Route>

        <Route exact path={AppRoute.Login}>
          <LoginPage />
        </Route>

        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render= {()=> <FavoritesPage />}
          autorisationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>

        <Route exact path={AppRoute.Room}>
          <RoomPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
