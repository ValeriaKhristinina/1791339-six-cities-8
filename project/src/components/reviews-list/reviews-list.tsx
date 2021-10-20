import Review from '../review/review';
import { ReviewType } from '../../types/review';

type ReviewsListProps = {
  reviews: ReviewType[],
};

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {
        reviews.map(
          (review) => (
            // eslint-disable-next-line react/jsx-key
            <Review commentReview={review} />
          ))
      }

    </ul>
  );
}

export default ReviewsList;
