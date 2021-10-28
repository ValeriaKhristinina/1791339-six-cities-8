/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Offers, Offer } from '../../types/offer';
import { widthRating } from '../../utils';
import Reviews from '../reviews/reviews';
import { reviews } from '../../mocks/reviews';
import Map from '../map/map';

import OffersList from '../offers-list/offers-list';
import { findMapCenter } from '../../const';

type RoomPageProps = {
  offers: Offers,
}

function RoomPage({ offers }: RoomPageProps): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>();

  const onCardHover = (offerId: number) => {
    const currentOffer = offers.find((offer) =>
      offer.id === offerId,
    );
    if (currentOffer) {
      setSelectedOffer(currentOffer);
    }
  };

  const { id } = useParams<{ id: string }>();
  const ourOffer = offers.find((offer) => {
    if (offer.id === Number(id)) {
      return true;
    }
    return false;
  });

  if (!ourOffer) {
    return <div></div>;
  }
  const { images, rating, type, bedrooms, maxAdults, price, goods, host, description, city } = ourOffer;

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {images.map((image: string | undefined) => (
              <div className="property__image-wrapper">
                <img className="property__image" src={image} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {ourOffer?.isPremium && (
              <div className="property__mark">
                <span>Premium</span>
              </div>)}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {ourOffer?.title}
              </h1>
              <button className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{ width: widthRating(rating) }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {goods.map((good) => (
                  <li className="property__inside-item">
                    {good}
                  </li>
                ))}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {host.name}
                </span>
                {host.isPro && (
                  <span className="property__user-status">
                    Pro
                  </span>
                )}
              </div>
              <div className="property__description">
                <p className="property__text">
                  {description}
                </p>
              </div>
            </div>
            <Reviews reviews={reviews} />
          </div>
        </div>
        <Map
          setAdditionalClass={'property__map'}
          mapCenter={findMapCenter(city.name)}
          points={offers}
          selectedOffer={selectedOffer}
        />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <OffersList
            offers={offers}
            onCardHover={onCardHover}
            isFavoritesPage={false}
          />
        </section>
      </div>
    </main>
  );
}


export default RoomPage;
