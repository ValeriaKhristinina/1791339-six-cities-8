import CommentForm from './comment-form';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';

const history = createMemoryHistory();

describe('Component: CommentForm', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <CommentForm />
      </Router>,
    );
    expect(screen.getByLabelText(/Your review/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Tell how was your stay, what you like and what can be improved/i)).toBeInTheDocument();
  });
});
