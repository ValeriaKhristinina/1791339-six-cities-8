import { useState } from 'react';
import {Offers} from '../../types/offer';
import Card from '../card/card';

type OffersListProps= {
  offers: Offers;
}

function OffersList({offers}: OffersListProps): JSX.Element{
  const [activeOffer, setActiveOffer] = useState(offers[0].id);

  return (
    <div className="cities__places-list places__list tabs__content">

      {
        offers.map((offer) => <Card onMouseEnter={()=>setActiveOffer(offer.id)} offer={offer} key={offer.id} />)
      }
     active offer: {activeOffer}
    </div>
  );
}

export default OffersList;


