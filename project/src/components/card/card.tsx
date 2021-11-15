/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { widthRating } from '../../utils';

type CardProps = {
  offer: Offer;
  onMouseEnter: () => void;
  isFavoritesPage: boolean
}

function Card({ offer, onMouseEnter, isFavoritesPage }: CardProps): JSX.Element {
  const { price, rating, title, type, isFavorite } = offer;
  const cardPath = `/offer/${offer.id}`;
  return (
    <article onMouseEnter={onMouseEnter} className={`place-card ${isFavoritesPage ? 'favorites__card' : 'cities__place-card '}`}>
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`place-card__image-wrapper ${isFavoritesPage ? 'favorites__image-wrapper' : 'cities__image-wrapper'}`}>
        <Link to={cardPath}>
          <img className="place-card__image" src={offer.images[0]} width="260" height="200" alt="" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active ' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: widthRating(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={cardPath}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>

  );
}

export default Card;
