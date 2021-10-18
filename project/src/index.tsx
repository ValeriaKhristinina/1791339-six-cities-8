import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offers, favoritesOffers } from './mocks/offers';


const Setting = {
  RENTS_COUNT: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      rentsCount={Setting.RENTS_COUNT}
      offers={offers}
      favoritesOffers={favoritesOffers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
