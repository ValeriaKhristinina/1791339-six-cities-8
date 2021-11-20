/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react';
import { ConnectedProps, connect } from 'react-redux';
import { fetchFavoritesOffersAction } from '../../store/api-actions';
import { getFavoritesOffers } from '../../store/app-data/selectors';
import { State } from '../../types/state';
import OffersList from '../offers-list/offers-list';
import UserNavigation from '../user-navigation/user-navigation';

const mapStateToProps = (state: State) => ({
  favoritesOffers: getFavoritesOffers(state),
});

const mapDispatchToProps = {
  fetchFavoritesOffers: () => fetchFavoritesOffersAction(),
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;


function FavoritesPage({ favoritesOffers, fetchFavoritesOffers }: PropsFromRedux): JSX.Element {
  useEffect(() => {
    fetchFavoritesOffers();
  }, [fetchFavoritesOffers]);
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
                      {/* <span>{favoritesOffers[0].city.name}</span> */}
                    </a>
                  </div>
                </div>
                <OffersList isFavoritesPage offers={favoritesOffers} />
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default connector(FavoritesPage);
