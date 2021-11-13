import CommentForm from '../comment-form/comment-form';
import { ReviewType } from '../../types/review';
import Review from '../review/review';

type ReviewsProps = {
  reviews: ReviewType[];
}

function Reviews({ reviews }: ReviewsProps): JSX.Element {
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
      <CommentForm />
    </section>
  );
}

export default Reviews;
