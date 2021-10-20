import { ReviewType } from '../types/review';

export const reviews: ReviewType[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: '/img/avatar-max.jpg',
      id: 4,
      isPro: false,
      name: 'Max',
    },
  },
  {
    comment: 'Sdlkfb skjbhc atfcask cvs.',
    date: '2019-05-08T14:13:56.569Z',
    id: 2,
    rating: 2,
    user: {
      avatarUrl: '',
      id: 5,
      isPro: true,
      name: 'DJ',
    },
  },
  {
    comment: 'A river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 3,
    rating: 5,
    user: {
      avatarUrl: '/img/avatar-angelina.jpg',
      id: 6,
      isPro: false,
      name: 'Lis',
    },
  },
];
