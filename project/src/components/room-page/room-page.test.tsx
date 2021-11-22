import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { Provider } from 'react-redux';
import RoomPage from './room-page';
import { makeStore } from '../../utils/mocks';


const store = makeStore();

describe('Component: RoomPage', () => {
  it('should render "RoomPage" when user navigate to "/offer/:id" url', () => {
    const history = createMemoryHistory();
    const firstOfferID = store.getState().DATA.offers[0].id;
    history.push(`/offer/${firstOfferID}`);

    render(
      <Provider store={store}>
        <Router history={history}>
          <RoomPage offerId={firstOfferID.toString()} />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
  });
});
