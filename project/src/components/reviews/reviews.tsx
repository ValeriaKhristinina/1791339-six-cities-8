import CommentForm from '../comment-form/comment-form';
import { CommentPost, ReviewType } from '../../types/review';
import Review from '../review/review';

type ReviewsProps = {
  reviews: ReviewType[];
  onCommentFormSubmit: (comment: CommentPost) => void;
}

function Reviews({ reviews, onCommentFormSubmit }: ReviewsProps): JSX.Element {
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
      <CommentForm onCommentFormSubmit={onCommentFormSubmit} />
    </section>
  );
}

export default Reviews;
