import LoadingPage from './loading-page';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';

const history = createMemoryHistory();

describe('Component: LoadingPage', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <LoadingPage />
      </Router>,
    );
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
});
