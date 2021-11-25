import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import { AuthorizationStatus } from '../../const';
import { User } from '../../types/user';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUser = (state: State): User => state[NameSpace.User].user;

