/* eslint-disable @typescript-eslint/no-explicit-any */
import {Offer} from '../types/offer';
import { ReviewType, ServerReviewType } from '../types/review';
import {ServerOffer} from '../types/server-offer';

export const adaptOfferToClient = (data: ServerOffer): Offer => {
  const adaptedOffer: any = {
    ...data,
    isFavorite: data['is_favorite'],
    previewImage: data['preview_image'],
    isPremium: data['is_premium'],
    maxAdults: data['max_adults'],
    host: {
      ...data.host,
      avatarUrl: data.host['avatar_url'],
      isPro: data.host['is_pro'],
    },
  };

  // Ненужные ключи мы удаляем
  delete adaptedOffer['preview_image'];
  delete adaptedOffer['is_premium'];
  delete adaptedOffer['is_favorite'];
  delete adaptedOffer['max_adults'];
  delete adaptedOffer.host['is_pro'];
  delete adaptedOffer.host['avatar_url'];

  return adaptedOffer;
};


export const adaptOfferToServer = (data: Offer): ServerOffer => {
  const adaptedOffer: any = {
    ...data,
    'is_favorite': data.isFavorite,
    'preview_image': data.previewImage,
    'is_premium': data.isPremium,
    'max_adults': data.maxAdults,
    host: {
      ...data.host,
      'is_pro': data.host.isPro,
      'avatar_url': data.host.avatarUrl,
    },
  };

  // Ненужные ключи мы удаляем
  delete adaptedOffer.isFavorite;
  delete adaptedOffer.previewImage;
  delete adaptedOffer.isPremium;
  delete adaptedOffer.maxAdults;
  delete adaptedOffer.host.isPro;
  delete adaptedOffer.host.avatarUrl;

  return adaptedOffer;
};


export const adaptCommentsToClient = (data: ServerReviewType): ReviewType => {
  const adaptedComments: any = {
    ...data,
    user: {
      ...data.user,
      avatarUrl: data.user['avatar_url'],
      isPro: data.user['is_pro'],
    },
  };

  // Ненужные ключи мы удаляем
  delete adaptedComments.user['avatar_url'];
  delete adaptedComments.user['is_pro'];


  return adaptedComments;
};
