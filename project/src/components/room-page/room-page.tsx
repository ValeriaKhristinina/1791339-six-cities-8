import { useState, useEffect } from 'react';
import { Offer } from '../../types/offer';
import { widthRating } from '../../utils/utils';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
import { findMapCenter } from '../../const';
import UserNavigation from '../user-navigation/user-navigation';
import { connect, ConnectedProps } from 'react-redux';
import { changeFavoriteStatusAction, fetchCommentsAction, fetchNearbyOffersAction } from '../../store/api-actions';
import { getComments, getNearbyOffers, getOfferById } from '../../store/app-data/selectors';
import { State } from '../../types/state';
import Reviews from '../reviews/reviews';

const mapStateToProps = (state: State, ownProps: RoomPageProps) => ({
  comments: getComments(state),
  nearbyOffers: getNearbyOffers(state),
  offer: getOfferById(state, ownProps.offerId),
});

type RoomPageProps = {
  offerId: string,
}


const mapDispatchToProps = {
  fetchComment: (id: string) => fetchCommentsAction(id),
  fetchNearbyOffers: (id: string) => fetchNearbyOffersAction(id),
  changeFavoriteStatus: (id: number, isFavorite: boolean) => changeFavoriteStatusAction(id, isFavorite),
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;


function RoomPage({ offer, comments, offerId, nearbyOffers, fetchComment, fetchNearbyOffers, changeFavoriteStatus }: PropsFromRedux & RoomPageProps): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>();

  useEffect(() => {
    fetchComment(offerId);
    fetchNearbyOffers(offerId);
  }, [offerId, fetchComment, fetchNearbyOffers]);

  const onCardHover = (id: number) => {
    const currentOffer = nearbyOffers.find((item) =>
      item.id === id,
    );
    if (currentOffer) {
      setSelectedOffer(currentOffer);
    }
  };


  if (!offer) {
    return <div></div>;
  }
  const { images, rating, type, bedrooms, maxAdults, price, goods, host, description, city, isFavorite } = offer;

  return (
    <div className="page">
      <UserNavigation />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image: string | undefined) => (
                <div className="property__image-wrapper" key={image}>
                  <img className="property__image" src={image} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer?.isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>)}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer?.title}
                </h1>
                <button onClick={() => changeFavoriteStatus(offer.id, !offer.isFavorite)} className={`property__bookmark-button button ${isFavorite ? 'property__bookmark-button--active' : ''}`} type="button">
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
                    <li className="property__inside-item" key={good}>
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
              <Reviews reviews={comments} />
            </div>
          </div>
          <Map
            setAdditionalClass={'property__map'}
            mapCenter={findMapCenter(city.name)}
            points={nearbyOffers}
            selectedOffer={selectedOffer}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList
              offers={nearbyOffers}
              onCardHover={onCardHover}
              isFavoritesPage={false}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export { RoomPage };
export default connector(RoomPage);
