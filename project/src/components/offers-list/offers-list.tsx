// import { useState } from 'react';
import { Offers } from '../../types/offer';
import Card from '../card/card';

type OffersListProps = {
  offers: Offers;
  isFavoritesPage: boolean;
  onCardHover?: (id: number) => void;
}

function OffersList({ offers, isFavoritesPage, onCardHover }: OffersListProps): JSX.Element {

  return (
    <div className={`${isFavoritesPage ? 'favorites__places' : 'cities__places-list places__list tabs__content'}`}>

      {
        offers.map(
          (offer) => (
            <Card
              onMouseEnter={() => {
                if (onCardHover) {
                  onCardHover(offer.id);
                }
              }}
              offer={offer}
              key={offer.id}
              isFavoritesPage={isFavoritesPage}
            />))
      }
    </div>
  );
}

export default OffersList;


