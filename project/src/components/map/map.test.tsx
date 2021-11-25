import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { makeFakeCity, makeStore, fakeOffers } from '../../utils/mocks';
import Map from './map';

const history = createMemoryHistory();
const fakeCity = makeFakeCity();

const additionalClass = 'cities__map';

describe('Component: Map', () => {
  it('should render correctly', () => {
    render(
      <Provider store={makeStore()}>
        <Router history={history}>
          <Map mapCenter={fakeCity} points={fakeOffers} setAdditionalClass={additionalClass} />
        </Router>
      </Provider>,
    );
    expect(document.querySelectorAll('.leaflet-marker-icon').length).toBe(fakeOffers.length);
  });
});

