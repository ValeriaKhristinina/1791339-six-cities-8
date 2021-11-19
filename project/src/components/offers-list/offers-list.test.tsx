import OffersList from './offers-list';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { makeFakeOffer } from '../../utils/mocks';

const history = createMemoryHistory();
const fakeOffers = new Array(3).fill(null).map(() => makeFakeOffer());

describe('Component: OffersList', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <OffersList
          offers={fakeOffers}
          isFavoritesPage={false}
          onCardHover={jest.fn()}
        />
      </Router>,
    );
    expect(document.querySelectorAll('.places__list .place-card').length).toBe(fakeOffers.length);
  });
});
