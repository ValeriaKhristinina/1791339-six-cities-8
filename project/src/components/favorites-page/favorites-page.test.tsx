import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { Provider } from 'react-redux';
// import userEvent from '@testing-library/user-event';
import FavoritesPage from './favorites-page';
import { AppRoute } from '../../const';
import { makeStore } from '../../utils/mocks';


const store = makeStore();

describe('Component: FavoritesPage', () => {
  it('should render "FavoritesPage" when user navigate to "favorites" url', () => {
    const history = createMemoryHistory();
    history.push(AppRoute.Favorites);

    render(
      <Provider store={store}>
        <Router history={history}>
          <FavoritesPage />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  });
});
