import { FC, useState } from 'react';
import styles from './ReviewCarousel.module.scss';
import { reviews } from 'entities/reviews/reviews';
import { getRelativeTime } from 'shared/hooks/getRelativeTime';
import { useSwipeNavigation } from 'shared/hooks/useSwipeNavigation';
import { Star } from 'shared/Star';



export const ReviewCarousel: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const total = reviews.length;

  const switchReview = (direction: 'prev' | 'next') => {
    if (animating) return;
    setAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prev) =>
        direction === 'prev'
          ? prev === 0
            ? total - 1
            : prev - 1
          : prev === total - 1
          ? 0
          : prev + 1,
      );
      setAnimating(false);
    }, 300);
  };

  const review = reviews[currentIndex];

  const renderStars = (rating: number) => (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} filled={i <= rating} />
      ))}
    </div>
  );

  const swipeHandlers = useSwipeNavigation({
    onNext: () => switchReview('next'),
    onPrev: () => switchReview('prev'),
  });

  return (
    <div className={styles.carousel}>
      <button
        className={`${styles.arrow} ${styles.left}`}
        onClick={() => switchReview('prev')}
      >
        &#10094;
      </button>

      <div
        {...swipeHandlers}
        className={`${styles.reviewCard} ${animating ? styles.fadeOutIn : ''}`}
      >
        {renderStars(review.rating)}
        <p className={styles.text}>{review.text}</p>
        <div className={styles.reviewer}>
          <div className={styles.initials}>
            <span>{review.initials}</span>
          </div>
          <div className={styles.reviewerAbout}>
            <p className={styles.name}>{review.name}</p>
            <p className={styles.date}>{getRelativeTime(review.date)}</p>
          </div>
        </div>
      </div>

      <button
        className={`${styles.arrow} ${styles.right}`}
        onClick={() => switchReview('next')}
      >
        &#10095;
      </button>
    </div>
  );
};
