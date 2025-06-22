import React from 'react';

import styles from './Review.module.scss';
import { ReviewCarousel } from 'widgets/reviewCarousel/ReviewCarousel';

export const Review: React.FC = () => (
  <section id="reviews" className={styles.review}>
    <span className={styles.reviewSubtitile}>Обратная связь от клиентов</span>
    <h2>Отзывы</h2>
    <ReviewCarousel />
  </section>
);
