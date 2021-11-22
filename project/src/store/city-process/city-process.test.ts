import {cityProcess} from './city-process';
import { DEFAULT_CITY } from '../../const';
import { changeCity } from '../action';

describe('Reducer: cityProcess', () => {
  it('should change city', () => {
    const state = {city: DEFAULT_CITY};
    expect(cityProcess(state, changeCity('Brussels')))
      .toEqual({city: 'Brussels'});
  });
});
