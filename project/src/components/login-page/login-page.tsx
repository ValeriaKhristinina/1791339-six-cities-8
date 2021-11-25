import { FormEvent, useRef } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute, CITIES } from '../../const';
import { changeCity } from '../../store/action';
import { loginAction } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/action';
import { AuthData } from '../../types/auth-data';

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit(authData: AuthData) {
    dispatch(loginAction(authData));
  },
  onChangeCity(city: string) {
    dispatch(changeCity(city));
  },
});

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function LoginPage(props: PropsFromRedux & { onSubmitButtonClick: () => void }): JSX.Element {

  const { onSubmit, onSubmitButtonClick, onChangeCity } = props;
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
    onSubmitButtonClick();
  };

  const randomCity = (CITIES[Math.floor(Math.random() * CITIES.length)]).name;

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form
            className="login__form form"
            action=""
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="login__input-wrapper form__input-wrapper">
              <label htmlFor="email" className="visually-hidden">E-mail</label>
              <input
                ref={loginRef}
                className="login__input form__input"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label htmlFor="password" className="visually-hidden">Password</label>
              <input
                ref={passwordRef}
                className="login__input form__input"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <button
              className="login__submit form__submit button"
              type="submit"
            >
              Sign in
            </button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link onClick={() => { onChangeCity(randomCity); }} className="locations__item-link" to={AppRoute.Root}>
              <span>{randomCity}</span>
            </Link>
          </div>
        </section>
      </div>
    </main >
  );
}
export { LoginPage };
export default connector(LoginPage);
