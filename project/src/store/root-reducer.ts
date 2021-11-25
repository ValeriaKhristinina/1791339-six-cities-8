import {combineReducers} from 'redux';
import { appData } from './app-data/app-data';
import { cityProcess } from './city-process/city-process';
import { userProcess } from './user-process/user-process';

export enum NameSpace {
  Data = 'DATA',
  City = 'CITY',
  User = 'USER'
}

export const rootReducer = combineReducers({
  [NameSpace.Data]: appData,
  [NameSpace.City]: cityProcess,
  [NameSpace.User]: userProcess,
});

export type RootState = ReturnType<typeof rootReducer>;
