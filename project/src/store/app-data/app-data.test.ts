/* eslint-disable no-console */
import { addComments, addNearbyOffers, addOffers } from '../action';
import {appData} from './app-data';
import {makeFakeComments, makeFakeOffer} from '../../utils/mocks';

const offers = new Array(3).fill(null).map(()=>(makeFakeOffer()));
const comments = new Array(3).fill(null).map(()=>(makeFakeComments()));

describe('Reducer: appData', () => {
  it('without additional parameters should return initial state', () => {
    expect(appData(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({offers: [], comments: [], isDataLoaded: false, nearbyOffers: []});
  });

  it('should add offers in state', () => {
    const state = {offers: [], comments: [], isDataLoaded: false, nearbyOffers: []};
    expect(appData(state, addOffers(offers)))
      .toEqual({offers, comments: [], isDataLoaded: true, nearbyOffers: []});
  });

  it('should add comments in state', () => {
    const state = {offers, comments: [], isDataLoaded: true, nearbyOffers: []};
    expect(appData(state, addComments(comments)))
      .toEqual({offers, comments, isDataLoaded: true, nearbyOffers: []});
  });

  it('should add nearby offers in state', () => {
    const state = {offers, comments, isDataLoaded: true, nearbyOffers: []};
    expect(appData(state, addNearbyOffers(offers)))
      .toEqual({offers, comments, isDataLoaded: true, nearbyOffers: offers});
  });
});
