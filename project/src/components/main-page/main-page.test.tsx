import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { Provider } from 'react-redux';
import MainPage from './main-page';
import { AppRoute } from '../../const';
import { makeStore } from '../../utils/mocks';


const store = makeStore();

describe('Component: MainPage', () => {
  it('should render "MainPage" when user navigate to "root" url', () => {
    const history = createMemoryHistory();
    history.push(AppRoute.Root);

    render(
      <Provider store={store}>
        <Router history={history}>
          <MainPage />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/places to stay/i)).toBeInTheDocument();
  });
});
