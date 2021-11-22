import Card from './card';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { makeStore, makeFakeOffer } from '../../utils/mocks';
import { configureMockStore } from '@jedmao/redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';

const offer = makeFakeOffer();
const history = createMemoryHistory();

describe('Component: Card', () => {
  it('should render correctly', () => {
    render(
      <Provider store={makeStore()}>
        <Router history={history}>
          <Card
            offer={offer}
            onMouseEnter={jest.fn()}
            isFavoritesPage={false}
          />
        </Router>
      </Provider>,
    );
    expect(screen.getByText(/In bookmarks/i)).toBeInTheDocument();
    expect(screen.getByText(/Rating/i)).toBeInTheDocument();
  });
});
