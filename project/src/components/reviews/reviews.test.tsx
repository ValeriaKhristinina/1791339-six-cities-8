import Reviews from './reviews';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { makeFakeComment } from '../../utils/mocks';

const history = createMemoryHistory();
const fakeComments = new Array(3).fill(null).map(() => makeFakeComment());

describe('Component: Reviews', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <Reviews
          reviews={fakeComments}
        />
      </Router>,
    );
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(document.querySelectorAll('.reviews__list .reviews__item').length).toBe(fakeComments.length);
  });
});
