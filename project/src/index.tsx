import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/app/app';
import { offers, favoritesOffers } from './mocks/offers';
import { reducer } from './store/reducer';


const Setting = {
  RENTS_COUNT: 5,
};

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        rentsCount={Setting.RENTS_COUNT}
        offers={offers}
        favoritesOffers={favoritesOffers}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
