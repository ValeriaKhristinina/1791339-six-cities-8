/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { State } from '../../types/state';

const mapStateToProps = (state: State) => ({
  auth: state.authorizationStatus,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;


function UserNavigation({ auth }: PropsFromRedux): JSX.Element {
  console.log('auth', auth);
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {auth === AuthorizationStatus.NoAuth && (
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        )}
        {auth === AuthorizationStatus.Auth && (
          <>
            <li className="header__nav-item user">
              <a className="header__nav-link header__nav-link--profile" href="#">
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
              </a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">
                <span className="header__signout">Sign out</span>
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export { UserNavigation };
export default connector(UserNavigation);
