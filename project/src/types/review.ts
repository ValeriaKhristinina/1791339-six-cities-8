/* eslint-disable camelcase */
export type ReviewType = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: {
    avatarUrl: string,
    id: number,
    isPro: boolean,
    name: string
  }
}

export type ServerReviewType = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: {
    avatar_url: string,
    id: number,
    is_pro: boolean,
    name: string
  }
}

export type CommentPost = {
  comment: string,
  rating: number
}

export type Reviews = ReviewType[];
