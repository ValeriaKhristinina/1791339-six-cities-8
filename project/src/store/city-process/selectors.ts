import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';

export const getCity = (state: State): string => state[NameSpace.city].city;
