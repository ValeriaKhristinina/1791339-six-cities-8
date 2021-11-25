import { addComments, addFavoritesOffers, addNearbyOffers, addOffers, updateOfferFavoriteStatus, SortOffersBy } from '../action';
import {appData} from './app-data';
import {makeFakeComment, makeFakeOffer} from '../../utils/mocks';
import { Sorting } from '../../const';

const offers = new Array(3).fill(null).map(()=>(makeFakeOffer()));
const comments = new Array(3).fill(null).map(()=>(makeFakeComment()));

describe('Reducer: appData', () => {
  it('without additional parameters should return initial state', () => {
    expect(appData(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({offers: [], comments: [], isDataLoaded: false, nearbyOffers: [], favoritesOffers: [], sortBy: Sorting.Popular});
  });

  it('should add offers in state', () => {
    const state = {offers: [], comments: [], isDataLoaded: false, nearbyOffers: [], favoritesOffers: [], sortBy: Sorting.Popular};
    expect(appData(state, addOffers(offers)))
      .toEqual({offers, comments: [], isDataLoaded: true, nearbyOffers: [], favoritesOffers: [], sortBy: Sorting.Popular});
  });

  it('should add comments in state', () => {
    const state = {offers, comments: [], isDataLoaded: true, nearbyOffers: [], favoritesOffers: [], sortBy: Sorting.Popular};
    expect(appData(state, addComments(comments)))
      .toEqual({offers, comments, isDataLoaded: true, nearbyOffers: [], favoritesOffers: [], sortBy: Sorting.Popular});
  });

  it('should add nearby offers in state', () => {
    const state = {offers, comments, isDataLoaded: true, nearbyOffers: [], favoritesOffers: [], sortBy: Sorting.Popular};
    expect(appData(state, addNearbyOffers(offers)))
      .toEqual({offers, comments, isDataLoaded: true, nearbyOffers: offers, favoritesOffers: [],sortBy: Sorting.Popular});
  });

  it('should add favorites offers in state', () => {
    const state = {offers, comments, isDataLoaded: true, nearbyOffers: [], favoritesOffers: [], sortBy: Sorting.Popular};
    expect(appData(state, addFavoritesOffers(offers)))
      .toEqual({offers, comments, isDataLoaded: true, nearbyOffers: [], favoritesOffers: offers, sortBy: Sorting.Popular});
  });
  it('should update offer favorite status', () => {
    const state = {offers, comments, isDataLoaded: true, nearbyOffers: [], favoritesOffers: [], sortBy: Sorting.Popular};
    const newState = appData(state, updateOfferFavoriteStatus(offers[0].id, true));
    expect(newState.offers[0].isFavorite).toBe(true);
  });
});
