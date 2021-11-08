/* eslint-disable jsx-a11y/anchor-is-valid */
import { Offers } from '../../types/offer';
import OffersList from '../offers-list/offers-list';
import UserNavigation from '../user-navigation/user-navigation';

type FavoritesPageProps = {
  offers: Offers,
}

function FavoritesPage({ offers }: FavoritesPageProps): JSX.Element {
  return (
    <div className="page">
      <UserNavigation />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>{offers[0].city.name}</span>
                    </a>
                  </div>
                </div>
                <OffersList isFavoritesPage offers={offers} />
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default FavoritesPage;
