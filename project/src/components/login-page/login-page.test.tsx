import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import LoginPage from './login-page';

const mockStore = configureMockStore();

describe('Component: LoginPage', () => {
  it('should render "LoginPage" when user navigate to "login" url', () => {
    const history = createMemoryHistory();
    history.push('/login');

    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <LoginPage onSubmitButtonClick={jest.fn()} />
        </Router>
      </Provider>,
    );

    expect(screen.queryAllByText(/Sign in/i)[0]).toBeInTheDocument();
  });
});
