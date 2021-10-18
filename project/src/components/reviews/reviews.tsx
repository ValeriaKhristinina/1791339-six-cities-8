import ReviewsList from '../reviews-list/reviews-list';
import CommentForm from '../comment-form/comment-form';
import { ReviewType } from '../../types/review';

type ReviewsProps = {
  reviews: ReviewType[];
}

function Reviews({ reviews }: ReviewsProps): JSX.Element {
  const reviewsCount = reviews.length;
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
      <ReviewsList reviews={reviews} />
      <CommentForm />
    </section>
  );
}

export default Reviews;
