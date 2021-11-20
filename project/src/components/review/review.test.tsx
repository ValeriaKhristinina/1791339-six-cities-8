import Review from './review';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { makeFakeComment } from '../../utils/mocks';

const history = createMemoryHistory();
const fakeComment = makeFakeComment();

describe('Component: Review', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <Review
          commentReview={fakeComment}
        />
      </Router>,
    );
    expect(screen.getByText(/Rating/i)).toBeInTheDocument();
  });
});
