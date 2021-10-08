import {Redirect, Route, RouteProps} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
  autorisationStatus: AuthorizationStatus;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {exact, path, render, autorisationStatus} = props;
  return (
    <Route
      exact = {exact}
      path = {path}
      render={()=> (
        autorisationStatus === AuthorizationStatus.Auth
          ? render()
          : <Redirect to={AppRoute.Login} />
      )}
    />
  );
}

export default PrivateRoute;
