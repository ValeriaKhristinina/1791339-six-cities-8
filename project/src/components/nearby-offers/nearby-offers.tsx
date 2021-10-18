import { useState } from 'react';
import { Offers } from '../../types/offer';
import Card from '../card/card';


type NearbyOffersProps = {
  offers: Offers;
  onCardHover?: (id: number) => void;
  isFavoritesPage: boolean;
}


function NearbyOffers({ offers, isFavoritesPage, onCardHover }: NearbyOffersProps): JSX.Element {
  const [, setActiveOffer] = useState(offers[0].id);

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {
          offers.map(
            (offer) => (
              // eslint-disable-next-line react/jsx-key
              <Card
                offer={offer}
                isFavoritesPage={isFavoritesPage}
                onMouseEnter={() => {
                  setActiveOffer(offer.id);
                  if (onCardHover) {
                    onCardHover(offer.id);
                  }
                }}
              />
            ))
        }

      </div>
    </section>
  );
}

export default NearbyOffers;
