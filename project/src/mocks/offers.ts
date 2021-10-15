/* eslint-disable no-console */
import { Offer } from '../types/offer';


export const offers: Offer[] = [
  {
    bedrooms: 5,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: false,
      name: 'Angelina',
    },
    id: 1,
    images: ['img/room.jpg', 'img/apartment-01.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 3,
    previewImage: 'img/1.png',
    price: 10,
    rating: 2.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',

  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.39,
        longitude: 34.895168,
        zoom: 7,
      },
      name: 'Hoofddorp',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    goods: [ 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'https://via.placeholder.com/150',
      id: 4,
      isPro: true,
      name: 'Philip',
    },
    id: 2,
    images: ['img/apartment-02.jpg', 'img/apartment-03.jpg'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/1.png',
    price: 1567,
    rating: 5.0,
    title: 'Super House',
    type: 'House',

  },
  {
    bedrooms: 5,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Dusseldorf',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/1.png',
      id: 23,
      isPro: true,
      name: 'Angelina Jolie',
    },
    id: 5,
    images: ['img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
    maxAdults: 20,
    previewImage: 'img/1.png',
    price: 120,
    rating: 2.8,
    title: 'Apartment for celebs',
    type: 'Apartment',

  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating',  'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina MArtin',
    },
    id: 6,
    images: ['img/apartment-01.jpg', 'img/apartment-01.jpg', 'img/room.jpg', 'img/apartment-01.jpg','img/apartment-01.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    maxAdults: 10,
    previewImage: 'img/1.png',
    price: 20,
    rating: 1.8,
    title: 'Beautiful & luxurious studio for hairdressing',
    type: 'Studio',

  },
];


export const favoritesOffers = offers.filter((offer) => offer.isFavorite);
