/* eslint-disable @typescript-eslint/no-explicit-any */
import {Offer} from '../types/offer';
import { ReviewType, ServerReviewType } from '../types/review';
import {ServerOffer} from '../types/server-offer';

export const adaptOfferToClient = (data: ServerOffer): Offer => ({
  bedrooms: data.bedrooms,
  city: {
    ...data.city,
  },
  description: data.description,
  goods: data.goods,
  host: {
    avatarUrl: data.host['avatar_url'],
    id: data.host.id,
    isPro: data.host['is_pro'],
    name: data.host.name,
  },
  id: data.id,
  images: data.images,
  isFavorite: data['is_favorite'],
  isPremium: data['is_premium'],
  location: {
    ...data.location,
  },
  maxAdults: data['max_adults'],
  previewImage: data['preview_image'],
  price: data.price,
  rating: data.rating,
  title: data.title,
  type: data.type,
});


export const adaptOfferToServer = (data: Offer): ServerOffer => ({
  bedrooms: data.bedrooms,
  city: {
    ...data.city,
  },
  description: data.description,
  goods: data.goods,
  host: {
    'avatar_url': data.host.avatarUrl,
    id: data.host.id,
    'is_pro': data.host.isPro,
    name: data.host.name,
  },
  id: data.id,
  images: data.images,
  'is_favorite': data.isFavorite,
  'is_premium': data.isPremium,
  location: {
    ...data.location,
  },
  'max_adults': data.maxAdults,
  'preview_image': data.previewImage,
  price: data.price,
  rating: data.rating,
  title: data.title,
  type: data.type,

});


export const adaptCommentsToClient = (data: ServerReviewType): ReviewType => ({
  comment: data.comment,
  date: data.date,
  id: data.id,
  rating: data.rating,
  user: {
    avatarUrl: data.user['avatar_url'],
    id: data.user.id,
    isPro: data.user['is_pro'],
    name: data.user.name,
  },
});

export const adaptCommentsToServer = (data: ReviewType): ServerReviewType => ({
  comment: data.comment,
  date: data.date,
  id: data.id,
  rating: data.rating,
  user: {
    'avatar_url': data.user.avatarUrl,
    id: data.user.id,
    'is_pro': data.user.isPro,
    name: data.user.name,
  },
});
