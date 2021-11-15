import {combineReducers} from 'redux';
import { appData } from './app-data/app-data';
import { cityProcess } from './city-process/city-process';
import { userProcess } from './user-process/user-process';

export enum NameSpace {
  data = 'DATA',
  city = 'CITY',
  user = 'USER'
}

export const rootReducer = combineReducers({
  [NameSpace.data]: appData,
  [NameSpace.city]: cityProcess,
  [NameSpace.user]: userProcess,
});

export type RootState = ReturnType<typeof rootReducer>;
