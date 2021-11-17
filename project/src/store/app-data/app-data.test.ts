// import { addOffers } from '../action';
import {appData} from './app-data';
describe('Reducer: appData', () => {
  it('without additional parameters should return initial state', () => {
    expect(appData(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({offers: [], comments: [], isDataLoaded: false, nearbyOffers: []});
  });

  // it('should add offers in state', () => {
  //   const state = {offers: [], comments: [], isDataLoaded: false, nearbyOffers: []};
  //   expect(appData(state, addOffers(offers)))
  //     .toEqual({questions, isDataLoaded: true});
  // });
});
