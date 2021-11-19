import {address, lorem, commerce, name, internet, image, datatype} from 'faker';
import {City, Offer} from '../types/offer';
import { ReviewType } from '../types/review';

const getRandomRaiting = () => (Math.floor(Math.random() * 5) + 1);

export const makeFakeOffer = (): Offer => ({
  bedrooms: datatype.number(),
  city: {
    location: {
      latitude: Number(address.latitude()),
      longitude: Number(address.longitude()),
      zoom: 13,
    },
    name: 'Paris',
  },
  description: lorem.paragraph(),
  goods: new Array(3).fill(null).map(() => (commerce.product())),
  host: {
    avatarUrl: internet.avatar(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name: name.firstName(),
  },
  id: datatype.number(),
  images: new Array(3).fill(null).map(()=>(image.image())),
  isFavorite: datatype.boolean(),
  isPremium: datatype.boolean(),
  location: {
    latitude: Number(address.latitude()),
    longitude: Number(address.longitude()),
    zoom: 13,
  },
  maxAdults: datatype.number(),
  previewImage: image.abstract(),
  price: datatype.number(),
  rating: getRandomRaiting(),
  title: name.title(),
  type: name.title(),
} as Offer);


export const makeFakeComment = (): ReviewType => ({
  comment: lorem.paragraph(),
  date: String(datatype.datetime()),
  id: datatype.number(),
  rating: getRandomRaiting(),
  user: {
    avatarUrl: internet.avatar(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name: name.firstName(),
  },
});

export const makeFakeEmail = (): string => (internet.email());

export const makeFakeCity = (): City => ({
  location: {
    latitude: Number(address.latitude()),
    longitude: Number(address.longitude()),
    zoom: 13,
  },
  name: address.cityName(),
});
