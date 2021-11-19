import Card from './card';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { makeFakeOffer } from '../../utils/mocks';

const offer = makeFakeOffer();
const history = createMemoryHistory();

describe('Component: Card', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <Card
          offer={offer}
          onMouseEnter={jest.fn()}
          isFavoritesPage={false}
        />
      </Router>,
    );
    expect(screen.getByText(/In bookmarks/i)).toBeInTheDocument();
    expect(screen.getByText(/Rating/i)).toBeInTheDocument();
  });
});
