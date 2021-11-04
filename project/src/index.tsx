import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { createAPI } from './services/api';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/app/app';
import { reducer } from './store/reducer';
import { AuthorizationStatus } from './const';
import { applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { checkAuthAction, fetchOffersAction } from './store/api-actions';
import { ThunkAppDispatch } from './types/action';
import { requireAuthorisation } from './store/action';

const api = createAPI(
  () => store.dispatch(requireAuthorisation(AuthorizationStatus.NoAuth)),
);
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ));

(store.dispatch as ThunkAppDispatch)(fetchOffersAction());
(store.dispatch as ThunkAppDispatch)(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
