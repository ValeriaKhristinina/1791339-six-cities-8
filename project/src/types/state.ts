import { Offers } from './offer';
import {AuthorizationStatus} from '../const';

export type State = {
  city: string,
  offers: Offers,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  userEmail: string | null,
}
