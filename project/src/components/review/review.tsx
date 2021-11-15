import { ReviewType } from '../../types/review';
import { widthRating } from '../../utils';

type ReviewProps = {
  commentReview: ReviewType;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
function Review({ commentReview }: ReviewProps): JSX.Element {
  const { user, comment, date, rating } = commentReview;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatar_url} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: widthRating(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>{date}</time>
      </div>
    </li >
  );
}

export default Review;
