import ErrorPage from './error-page';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';

const history = createMemoryHistory();

describe('Component: ErrorPage', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <ErrorPage />
      </Router>,
    );
    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
  });
});
