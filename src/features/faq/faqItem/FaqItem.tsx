import { FC, useState } from 'react';
import styles from './FaqItem.module.scss';

interface FaqItemProps {
  question: string;
  answer: string;
}

export const FaqItem: FC<FaqItemProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button
        className={styles.question}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {question}
        <svg
          className={`${styles.icon} ${open ? styles.iconOpen : ''}`}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <div className={`${styles.answerWrapper} ${open ? styles.open : ''}`}>
        <div className={styles.answer}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};
