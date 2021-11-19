import CommentsList from './comments-list';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { makeFakeComment } from '../../utils/mocks';

const history = createMemoryHistory();
const makeFakeComments = new Array(5).fill(null).map(() => makeFakeComment());

describe('Component: CommentsList', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <CommentsList
          reviews={makeFakeComments}
        />
      </Router>,
    );
    expect(document.querySelectorAll('.reviews__list li').length).toBe(makeFakeComments.length);
  });
});
