import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  RENTS_COUNT: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App rentsCount = {Setting.RENTS_COUNT}/>
  </React.StrictMode>,
  document.getElementById('root'));
