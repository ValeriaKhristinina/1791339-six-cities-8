import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { createAPI } from './services/api';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/app/app';
import { reducer } from './store/reducer';
import { requireAuthorization } from './store/action';
import { AuthorizationStatus } from './const';
import { applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { fetchOffersAction } from './store/api-actions';
import { ThunkAppDispatch } from './types/action';
// import {AuthorizationStatus} from './const';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ));

// (store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchOffersAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
