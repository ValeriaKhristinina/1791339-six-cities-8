import { connect, ConnectedProps } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { State } from '../../types/state';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
  authorizationStatus: AuthorizationStatus;
}

const mapStateToProps = (state: State) => ({
  authorizationStatus: state.authorizationStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & PrivateRouteProps;

function PrivateRoute(props: ConnectedComponentProps): JSX.Element {
  const { exact, path, render, authorizationStatus } = props;
  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        authorizationStatus === AuthorizationStatus.Auth
          ? render()
          : <Redirect to={AppRoute.Login} />
      )}
    />
  );
}
export { PrivateRoute };
export default connector(PrivateRoute);
