import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { Provider } from 'react-redux';
import UserNavigation from './user-navigation';
import { makeStore } from '../../utils/mocks';


const store = makeStore();

describe('Component: UserNavigation', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <Router history={history}>
          <UserNavigation />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });
});

