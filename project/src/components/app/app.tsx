import { Switch, Route, BrowserRouter} from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../main-page/main-page';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import RoomPage from '../room-page/room-page';
import ErrorPage from '../error-page/error-page';


type AppProps = {
  rentsCount: number;
}

function App({rentsCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path= {AppRoute.Root}>
          <MainPage rentsCount= {rentsCount}/>
        </Route>

        <Route exact path={AppRoute.Login}>
          <LoginPage />
        </Route>

        <Route exact path={AppRoute.Favorites}>
          <FavoritesPage />
        </Route>

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
