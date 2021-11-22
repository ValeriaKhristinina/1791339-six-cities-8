import CommentForm from '../comment-form/comment-form';
import { CommentPost, ReviewType } from '../../types/review';
import Review from '../review/review';
import { AuthorizationStatus } from '../../const';

type ReviewsProps = {
  reviews: ReviewType[];
  onCommentFormSubmit: (comment: CommentPost) => void;
  authorizationStatus: AuthorizationStatus,
}

function Reviews({ reviews, onCommentFormSubmit, authorizationStatus }: ReviewsProps): JSX.Element {
  const reviewsCount = reviews.length;
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map(
            (review) => (
              // eslint-disable-next-line react/jsx-key
              <Review commentReview={review} key={review.id} />
            ))
        }

      </ul>
      {authorizationStatus === AuthorizationStatus.Auth &&
        <CommentForm onCommentFormSubmit={onCommentFormSubmit} />}
    </section>
  );
}

export default Reviews;
