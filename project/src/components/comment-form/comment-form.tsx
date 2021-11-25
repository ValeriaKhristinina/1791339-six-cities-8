import { FormEvent, useState, Fragment } from 'react';
import { CommentPost } from '../../types/review';

type CommentFormProps = {
  onCommentFormSubmit: (commnent: CommentPost) => void
}

function CommentForm({ onCommentFormSubmit }: CommentFormProps): JSX.Element {
  const [rating, setRating] = useState('0');
  const [comment, setComment] = useState('');
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onCommentFormSubmit({ comment, rating: Number(rating) });
    setComment('');
    setRating('0');
  };

  const ifButtonDisabled = rating === '0' || comment.length <= 50 || comment.length >= 300;

  return (
    <form onSubmit={handleSubmit} className="reviews__form form" action="#" method="post" >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {['5', '4', '3', '2', '1'].map((ratingItem) => (
          <Fragment key={ratingItem}>
            <input onChange={(evt) => { setRating(ratingItem); }} checked={rating === ratingItem} className="form__rating-input visually-hidden" name="rating" value={ratingItem} id={`${ratingItem}-stars`} type="radio" />
            <label htmlFor={`${ratingItem}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>))}
      </div>
      <textarea onChange={(evt) => { setComment(evt.target.value); }} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={comment}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button disabled={ifButtonDisabled} className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form >
  );
}

export default CommentForm;
